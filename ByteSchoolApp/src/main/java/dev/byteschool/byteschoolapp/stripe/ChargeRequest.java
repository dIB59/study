package dev.byteschool.byteschoolapp.stripe;

public record ChargeRequest(String email, String token, Long amount, String description) {}
