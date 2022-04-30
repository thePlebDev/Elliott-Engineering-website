package com.example.TestingDocker4.services;

import com.example.TestingDocker4.Exceptions.UsernameAlreadyExists;
import com.example.TestingDocker4.Models.User;
import com.example.TestingDocker4.Utils.PaymentProcessingObject;
import com.example.TestingDocker4.Utils.StripeApi;
import com.example.TestingDocker4.repositories.UserRepository;
import com.stripe.exception.StripeException;
import com.stripe.model.Subscription;
import com.stripe.param.SubscriptionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * TODO: REWORK THE ROLE SYSTEM
 * TODO: ELIMINATE THE USERNAME IN FAVOUR OF EMAIL
 * **/
@Service
@Transactional
public class UserService {




    private BCryptPasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private PaymentProcessingObject paymentProcessingObject;

    //private Role role = new Role("BASIC");;

    @Autowired
    public UserService(BCryptPasswordEncoder passwordEncoder, UserRepository userRepository,
                       StripeApi paymentProcessingObject){
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.paymentProcessingObject = paymentProcessingObject;
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









}
