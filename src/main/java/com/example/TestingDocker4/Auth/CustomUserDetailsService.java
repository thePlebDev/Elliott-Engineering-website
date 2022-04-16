package com.example.TestingDocker4.Auth;

import com.example.TestingDocker4.Models.User;
import com.example.TestingDocker4.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.function.Supplier;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Supplier<UsernameNotFoundException> error = ()-> new UsernameNotFoundException("Problem during authentication");

        User user = userRepository.findByUsername(username)
                .orElseThrow(error);

        return new SecurityUser(user);
    }
}
