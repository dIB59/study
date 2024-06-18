package dev.byteschool.byteschoolapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckoutController {

    @Value("${STRIPE_PUBLIC_KEY}")
    private String stripePublicKey;

    @RequestMapping("/checkout")
    public String checkout(Product model) {
        model.addAmount("amount", 50 * 100); // in cents
        model.setStripePublicKey("stripePublicKey", stripePublicKey);
        model.addAttribute("currency", Currency.EUR);
        return "checkout";
    }


}

