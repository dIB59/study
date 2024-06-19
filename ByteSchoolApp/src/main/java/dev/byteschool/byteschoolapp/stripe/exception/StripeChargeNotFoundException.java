package dev.byteschool.byteschoolapp.stripe.exception;

public class StripeChargeNotFoundException extends RuntimeException {
    public StripeChargeNotFoundException(String message) {
        super(message);
    }

    public StripeChargeNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}