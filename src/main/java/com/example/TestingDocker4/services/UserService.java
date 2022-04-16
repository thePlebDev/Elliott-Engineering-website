package com.example.TestingDocker4.services;

import com.example.TestingDocker4.Auth.CustomAuthenticationProvider;
import com.example.TestingDocker4.Exceptions.JWTFilterException;
import com.example.TestingDocker4.Models.Role;
import com.example.TestingDocker4.Models.User;
import com.example.TestingDocker4.repositories.UserRepository;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * TODO: REWORK THE ROLE SYSTEM
 * TODO: ELIMINATE THE USERNAME IN FAVOUR OF EMAIL
 * **/
@Service
@Transactional
public class UserService {


    private BCryptPasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private CustomAuthenticationProvider customAuthenticationProvider;

    //private Role role = new Role("BASIC");;

    @Autowired
    public UserService(BCryptPasswordEncoder passwordEncoder, UserRepository userRepository){
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

//    //public void setRole(Role role) {
//        this.role = role;
//    }

    public String signup(User user){
        String rawPassword = user.getPassword();
        String encodedPassword = passwordEncoder.encode(rawPassword);
        user.setPassword(encodedPassword);
//        user.setRole(this.role);

        User savedUser = userRepository.save(user);
        return "USER SAVED";
    }

    public String login(String username, String password){
        //customAuthenticationProvider.authenticate(username);

        return "THIS IS NOT WORKING YET";

    }

    public String subscribe()  {
        Stripe.apiKey = "sk_test_51E89VVIUupCxt3YboFWGG6gZ7PX7xZNJ9K82x9HOIXNUM1II4OCg1813299W2rYmhGNm00OmdBNfQnXEHRJRuC4900zDiuLMYJ";
        String priceId = "price_1Kh1oMIUupCxt3YbPd92xUh6";

        SessionCreateParams params = new SessionCreateParams.Builder()
                .setSuccessUrl("https://example.com/success.html?session_id={CHECKOUT_SESSION_ID}")
                .setCancelUrl("https://example.com/canceled.html")
                .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
                .addLineItem(new SessionCreateParams.LineItem.Builder()
                        // For metered billing, do not pass quantity
                        .setQuantity(1L)
                        .setPrice(priceId)
                        .build()
                )
                .build();
        try{
            Session session = Session.create(params);
            System.out.println(session.getId());

        } catch (StripeException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }


        return "ok";
    }

//    public String createUserId(String username,String email){
//      //NEED TO REWORK EVERYTHING SO THAT EMAIL IS USED FOR AUTHENTICATION
//
//    }
}
