package dev.byteschool.byteschoolapp.stripe;

import com.stripe.model.Token;

import java.util.Optional;

public record StripeCardToken(
        StripeTokenDto tokenDto,
        Token token,
        boolean success
) {
}
