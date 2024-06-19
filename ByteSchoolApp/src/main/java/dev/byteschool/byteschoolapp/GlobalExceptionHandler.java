package dev.byteschool.byteschoolapp;

import com.stripe.exception.StripeException;
import dev.byteschool.byteschoolapp.stripe.exception.StripeChargeNotFoundException;
import dev.byteschool.byteschoolapp.stripe.exception.StripeCustomerNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

//@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(StripeCustomerNotFoundException.class)
    @ResponseStatus(BAD_REQUEST)
    public String handleStripeProcessingException(StripeCustomerNotFoundException ex) {
//        log.error(ex.getMessage());
        return ex.getMessage();
    }

    @ExceptionHandler(StripeChargeNotFoundException.class)
    @ResponseStatus(BAD_REQUEST)
    public String handleStripeChargeNotFoundException(Exception ex) {
//        log.error(ex.getMessage());
        return ex.getMessage();
    }

    @ExceptionHandler(StripeException.class)
    @ResponseStatus(BAD_REQUEST)
    public String handleStripeException(Exception ex) {
//        log.error(ex.getMessage());
        return ex.getMessage();
    }
}
