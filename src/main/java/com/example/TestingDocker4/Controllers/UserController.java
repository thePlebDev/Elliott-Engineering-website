package com.example.TestingDocker4.Controllers;

import com.example.TestingDocker4.Exceptions.JWTFilterException;
import com.example.TestingDocker4.Exceptions.UsernameAlreadyExists;
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

import java.util.Map;

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




}
