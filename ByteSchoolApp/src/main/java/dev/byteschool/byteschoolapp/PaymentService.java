package dev.byteschool.byteschoolapp;


import dev.byteschool.byteschoolapp.stripe.StripeCardToken;
import dev.byteschool.byteschoolapp.stripe.StripeTokenDto;

    /**
     ** methods should return id of Charge, Payment Intent and Customer
     */
public interface PaymentService {

    String createCharge(String email, String token, Long amount, String description);
    String createPaymentIntent(int amount, String currency);
    String createCustomer(String email, String token);
    StripeCardToken createToken(StripeTokenDto cardDto);
}
