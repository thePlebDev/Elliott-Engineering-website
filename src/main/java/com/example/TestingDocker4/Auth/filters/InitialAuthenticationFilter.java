package com.example.TestingDocker4.Auth.filters;

import com.example.TestingDocker4.Exceptions.JWTFilterException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.UnsatisfiedServletRequestParameterException;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@Component
public class InitialAuthenticationFilter extends OncePerRequestFilter {

    public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;



    private AuthenticationManager manager;

    private String signing = "SECRETSIGNINGKEY548q9anreqfewiqupre9qr32qfwqj09032[mr2q";


    @Autowired
    public InitialAuthenticationFilter(AuthenticationManager authenticationManager){
        this.manager = authenticationManager;

    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("THIS IS FROM THE FILTER");
        String email = request.getHeader("email");
        String password = request.getHeader("password");

        if(email == null || password == null){
            throw new JWTFilterException("Authentication Error");
        }




        Authentication auth = new UsernamePasswordAuthenticationToken(email,password);

            //runs through our CustomAuthenticationProvider class and does the actual authentication
            manager.authenticate(auth); //WILL THROW EXCEPTION IF USERNAME OR PASSWORD IS WRONG

        SecretKey key = Keys.hmacShaKeyFor(
                signing.getBytes(StandardCharsets.UTF_8)
        );

        String jwt = Jwts.builder()
                .setClaims(Map.of("email",email))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(key)
                .compact();


        response.setHeader("Authorization", jwt);



        filterChain.doFilter(request,response);
    }

    @Override
    protected  boolean shouldNotFilter(HttpServletRequest request){
        return !request.getServletPath().equals("/api/v1/user/login"); //only applies this filter to the login path
    }
}
