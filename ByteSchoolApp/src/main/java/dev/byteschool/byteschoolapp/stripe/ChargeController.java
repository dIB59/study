package dev.byteschool.byteschoolapp.stripe;

import dev.byteschool.byteschoolapp.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("v1/stripe")
public class ChargeController {

    private final PaymentService paymentsService;

    @Autowired
    public ChargeController(StripePaymentService paymentsService){
        this.paymentsService = paymentsService;
    }


    @PostMapping("card/token")
    @ResponseStatus(CREATED)
    public String createCardToken(@RequestBody StripeTokenDto model){
        return paymentsService.createToken(model).token().toString();
    }

    @PostMapping("charge")
    @ResponseStatus(CREATED)
    public String charge(
            @RequestBody ChargeRequest chargeRequest
    ){
        return paymentsService.createCharge(
            chargeRequest.email(),
            chargeRequest.token(),
            chargeRequest.amount(),
            chargeRequest.description()
        );
    }

}