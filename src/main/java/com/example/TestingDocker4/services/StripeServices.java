package com.example.TestingDocker4.services;

import com.stripe.exception.StripeException;
import com.stripe.model.Price;
import com.stripe.model.PriceCollection;
import com.stripe.model.checkout.Session;
import com.stripe.param.PriceListParams;
import com.stripe.param.checkout.SessionCreateParams;

public class StripeServices {


    public String createCheckoutSession() throws StripeException {
        PriceListParams priceParams = PriceListParams.builder().addLookupKeys("price_1Kh1oMIUupCxt3YbPd92xUh6").build();
        PriceCollection prices = Price.list(priceParams);

        SessionCreateParams params = SessionCreateParams.builder()
                .addLineItem(
                        SessionCreateParams.LineItem.builder().setPrice(prices.getData().get(0).getId()).setQuantity(1L).build())
                .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
                .setSuccessUrl("http://localhost:3000/success")
                .setCancelUrl("http://localhost:3000/cancel")
                .build();
        Session session = Session.create(params);
        return "meat";
    }

}
