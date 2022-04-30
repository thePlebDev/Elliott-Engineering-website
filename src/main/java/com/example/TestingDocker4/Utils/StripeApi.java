package com.example.TestingDocker4.Utils;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.param.CustomerCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class StripeApi implements PaymentProcessingObject{


    @Value("${Stripe.sk.key}")
    private String apikey;

    public String createSubscribingCustomerId(String email){
        Stripe.apiKey = apikey;
        CustomerCreateParams params =
                CustomerCreateParams.builder()
                        .setEmail(email)
                        .setPaymentMethod("pm_card_visa")
                        .setInvoiceSettings(
                                CustomerCreateParams.InvoiceSettings
                                        .builder()
                                        .setDefaultPaymentMethod("pm_card_visa")
                                        .build()
                        )
                        .build();
        try{
            Customer customer = Customer.create(params);
            return customer.getId();
        } catch (StripeException e) {
            e.printStackTrace();
            return e.getMessage();
        }
    }
}
