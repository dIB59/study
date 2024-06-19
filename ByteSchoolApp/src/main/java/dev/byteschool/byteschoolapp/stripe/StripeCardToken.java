package dev.byteschool.byteschoolapp.stripe;

import com.stripe.model.Token;

import java.util.Optional;

public record StripeToken(
        StripeTokenDto tokenDto,
        Optional<Token> token,
        boolean success
) {
}
