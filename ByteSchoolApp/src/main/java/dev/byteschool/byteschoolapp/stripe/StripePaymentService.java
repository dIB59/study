package dev.byteschool.byteschoolapp.stripe;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Customer;
import com.stripe.model.PaymentIntent;
import com.stripe.model.Token;
import com.stripe.param.ChargeCreateParams;
import com.stripe.param.CustomerCreateParams;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.param.TokenCreateParams;
import dev.byteschool.byteschoolapp.PaymentService;
import dev.byteschool.byteschoolapp.stripe.exception.StripeChargeNotFoundException;
import dev.byteschool.byteschoolapp.stripe.exception.StripeCustomerNotFoundException;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class StripePaymentService implements PaymentService {

    private final String stripeApiKey;

    public StripePaymentService(@Value("${api.stripe.secret}") String stripeApiKey) {
        this.stripeApiKey = stripeApiKey;
        init();
    }

    @PostConstruct
    void init() {
        Stripe.apiKey = stripeApiKey;
    }

    @Override
    public String createPaymentIntent(int amount, String currency) {
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount((long) amount)
                .setCurrency(currency)
                .build();
        try {
            return PaymentIntent.create(params).getId();
        } catch (StripeException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String createCharge(String email, String token, Long amount, String description) {
        ChargeCreateParams chargeParams = ChargeCreateParams.builder()
                .setAmount(amount)
                .setReceiptEmail(email)
                .setCurrency("USD")
                .setDescription(description)
                .setSource(token)
                .build();
        try {
            return Charge.create(chargeParams).getId();
        } catch (StripeException e) {
            throw new StripeChargeNotFoundException(e.getMessage());
        }
    }

    @Override
    public String createCustomer(String email, String token) {
        CustomerCreateParams customerParams = CustomerCreateParams.builder()
            .setDescription("Customer for " + email)
            .setEmail(email)
            .setSource(token)
            .build();
        try {
            return Customer.create(customerParams).getId();
        } catch (StripeException e) {
            throw new StripeCustomerNotFoundException(e.getMessage());
        }
    }

    @Override
    public StripeCardToken createToken(StripeTokenDto model) {

            Map<String, Object> card = new HashMap<>();
            card.put("number", model.cardNumber());
            card.put("exp_month", Integer.parseInt(model.expMonth()));
            card.put("exp_year", Integer.parseInt(model.expYear()));
            card.put("cvc", model.cvc());
            Map<String, Object> params = new HashMap<>();
            params.put("card", card);
        try {
            final Token token = Token.create(params);
            final boolean success = token != null && token.getId() != null;
            return new StripeCardToken(model, token, success);
        } catch (StripeException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

}
