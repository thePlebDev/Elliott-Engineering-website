package com.example.TestingDocker4.Controllers;

import com.example.TestingDocker4.Exceptions.JWTFilterException;
import com.example.TestingDocker4.Models.StripeCustomer;
import com.example.TestingDocker4.Models.User;
import com.example.TestingDocker4.services.UserService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.checkout.Session;
import com.stripe.param.CustomerCreateParams;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/user",produces = "application/json",method = {RequestMethod.GET,RequestMethod.POST})
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(){
        return "Success!!";
    }

    @PostMapping("/signup")
    public String signup(@RequestBody User user) throws JWTFilterException{
        String response = this.userService.signup(user);

        return response;
    }


    @GetMapping("/auth")
    public String auth(){
        return "ONLY SEEN WHEN AUTHENTICATED";
    }


    @PostMapping("/create-customer")
    public String createCustomerId(){
        return this.userService.create();

//        Stripe.apiKey = apikey;
//        CustomerCreateParams params =
//                CustomerCreateParams.builder()
//                        .setEmail("bob@bobmail.com")
//                        .setPaymentMethod("pm_card_visa")
//                        .setInvoiceSettings(
//                                CustomerCreateParams.InvoiceSettings
//                                        .builder()
//                                        .setDefaultPaymentMethod("pm_card_visa")
//                                        .build()
//                        )
//                        .build();
//        try{
//            Customer customer = Customer.create(params);
//            return customer.getId();
//        } catch (StripeException e) {
//            e.printStackTrace();
//            return e.getMessage();
//        }
    }

//    @PostMapping("/create-customer1")
//    public String createCustomer(@RequestBody StripeCustomer stripeCustomer){
//
//        userService.createUserId(stripeCustomer.getUsername(),stripeCustomer.getEmail());
//
//    }

}
