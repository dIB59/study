package dev.byteschool.byteschoolapp.stripe;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.Customer;
import com.stripe.model.Token;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class StripeService {

    private final String stripeApiKey;

    public StripeService(@Value("${api.stripe.key}") String stripeApiKey) {
        this.stripeApiKey = stripeApiKey;
    }

    @PostConstruct
    void init(){
        Stripe.apiKey = stripeApiKey;
    }


    public Optional<String> createCharge(String email, String token, int amount) {
        Optional<String> id;
            Map<String, Object> chargeParams = new HashMap<>();
            chargeParams.put("amount", amount);
            chargeParams.put("currency", "usd");
            chargeParams.put("description", "Charge for " + email);
            chargeParams.put("source", token); // ^ obtained with Stripe.js

        try {
            Charge charge = Charge.create(chargeParams);
            id = Optional.ofNullable(charge.getId());
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
        return id;
    }

    public Optional<String> createCustomer(String email, String token) {
        Optional<String> id;
        try {
            Map<String, Object> customerParams = new HashMap<>();

            customerParams.put("description", "Customer for " + email);
            customerParams.put("email", email);

            customerParams.put("source", token);
            Customer customer = Customer.create(customerParams);
            id = Optional.ofNullable(customer.getId());
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
        return id;
    }

    

}
