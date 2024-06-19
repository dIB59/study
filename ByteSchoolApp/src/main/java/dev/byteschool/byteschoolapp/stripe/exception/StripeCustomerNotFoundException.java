package dev.byteschool.byteschoolapp.stripe.exception;

public class StripeCustomerNotFoundException extends RuntimeException {
    public StripeCustomerNotFoundException(String message) {
        super(message);
    }

    public StripeCustomerNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}