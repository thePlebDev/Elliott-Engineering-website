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
import org.springframework.beans.factory.annotation.Value;
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

    @Value("${Strip.sk.key}")
    private String apikey;


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

    public String create(){
        return apikey;
    }


}
