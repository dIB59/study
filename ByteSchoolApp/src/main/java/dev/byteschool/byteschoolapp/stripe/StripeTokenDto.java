package dev.byteschool.byteschoolapp.stripe;

public record StripeTokenDto(
        String cardNumber,
        String expMonth,
        String expYear,
        String cvc,
        String username
) {
    private String token;
    private boolean success;

    // Constructor to initialize all fields
    public StripeTokenDto(String cardNumber, String expMonth, String expYear, String cvc, String username) {
        this.cardNumber = cardNumber;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.cvc = cvc;
        this.username = username;
        this.token = "";
        this.success = false;
    }

    public String token() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public boolean success() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}

