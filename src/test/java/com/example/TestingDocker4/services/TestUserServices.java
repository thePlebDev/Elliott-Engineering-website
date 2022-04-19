package com.example.TestingDocker4.services;
import com.example.TestingDocker4.Models.User;
import com.example.TestingDocker4.repositories.UserRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TestUserServices {

    //UNDER TEST
    private UserService underTest;

    //Mocks
    @Mock
    private BCryptPasswordEncoder mockedPasswordEncoder;
    @Mock
    private UserRepository mockedUserRepository;

    @BeforeEach
    public void setup(){
        this.underTest = new UserService(mockedPasswordEncoder,mockedUserRepository);
    }

    @Test
    public void signupTest(){
        //GIVEN

//        User user = new User("BOB","12345","bob@bobmail.com");
//
//        when(mockedPasswordEncoder.encode("12345")).thenReturn("12345");
//        when(mockedUserRepository.save(user)).thenReturn(user);
//
//        //WHEN
//        underTest.signup(user);
//
//        //THEN
//        verify(mockedUserRepository,atLeast(1)).save(user);
//        verify(mockedPasswordEncoder,atMost(1)).encode("12345");

    }
}
