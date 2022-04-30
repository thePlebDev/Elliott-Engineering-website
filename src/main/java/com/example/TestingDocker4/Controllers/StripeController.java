package com.example.TestingDocker4.Controllers;

import com.example.TestingDocker4.services.StripeServices;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/stripe")
public class StripeController {

    @Autowired
    StripeServices stripeServices;


    @PostMapping("/create-checkout-session")
    public String createCheckoutSession() throws StripeException {
        return stripeServices.createCheckoutSession();
    }
}
