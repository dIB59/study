package dev.byteschool.byteschoolapp;

public record ChargeRequest(
         String description,
         int amount,
         Currency currency,
         String stripeEmail,
         String stripeToken
) {

}

