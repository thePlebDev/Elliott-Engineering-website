package com.example.TestingDocker4.Auth;

import com.example.TestingDocker4.Auth.filters.InitialAuthenticationFilter;
import com.example.TestingDocker4.Auth.filters.JwtTokenFilter;
import com.example.TestingDocker4.Exceptions.FilterChainExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Configuration
public class WebConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private FilterChainExceptionHandler filterChainExceptionHandler;

    @Autowired
    private CustomAuthenticationProvider authenticationProvider;


    @Override
    protected void configure(AuthenticationManagerBuilder auth){
        auth.authenticationProvider(authenticationProvider);
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.csrf().disable();
        http.authorizeRequests()
                .mvcMatchers("/api/v1/user/signup","/api/v1/user/login","/")
                .permitAll();


        http.addFilterBefore(filterChainExceptionHandler,BasicAuthenticationFilter.class);
        http.addFilterAt( new InitialAuthenticationFilter(authenticationManager()), BasicAuthenticationFilter.class)
                .addFilterAfter(new JwtTokenFilter(),BasicAuthenticationFilter.class);
//        http.authorizeRequests()
//                .anyRequest()
//                .authenticated();

    }

    @Override
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception{
        return super.authenticationManager();
    }

}
