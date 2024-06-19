package dev.byteschool.byteschoolapp.stripe;

public record StripeTokenDto(
        String cardNumber,
        String expMonth,
        String expYear,
        String cvc,
        String token
) {
}
