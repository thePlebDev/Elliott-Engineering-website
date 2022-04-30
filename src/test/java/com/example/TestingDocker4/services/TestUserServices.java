/*
 *Copyright (c) 2012-2023 Tristan Elliott and Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
* associated documentation files (the "Software"), to deal in the Software without restriction,
* including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
* and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
* portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
* LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
* USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package com.example.TestingDocker4.services;
import com.example.TestingDocker4.Exceptions.UsernameAlreadyExists;
import com.example.TestingDocker4.Models.User;
import com.example.TestingDocker4.Utils.PaymentProcessingObject;
import com.example.TestingDocker4.Utils.StripeApi;
import com.example.TestingDocker4.repositories.UserRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

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
    @Mock
    private StripeApi mockerPaymentProcessingObject;

//    @Mock
//    private String test;

    @BeforeEach
    public void setup(){
        this.underTest = new UserService(mockedPasswordEncoder,
                mockedUserRepository,
                mockerPaymentProcessingObject);
    }


   @Test
    public void createUserTestTrue() throws UsernameAlreadyExists {
        //GIVEN
       String EXPECTED_CUSTOMER_ID = "12345";
       String EXPECTED_EMAIL = "BOB@BOBMAIL.COM";
       User EXPECTED_USER = new User(EXPECTED_EMAIL,"12345");
       //when enables stubbing methods
       when(mockerPaymentProcessingObject.createSubscribingCustomerId(EXPECTED_EMAIL)).thenReturn(EXPECTED_CUSTOMER_ID);
       when(mockedUserRepository.findByEmail(EXPECTED_EMAIL)).thenReturn(Optional.empty());

       //WHEN
       //String returnedCustomerId = underTest.createUser(EXPECTED_EMAIL);

       //THEN
      // assertThat(returnedCustomerId).isEqualTo(EXPECTED_CUSTOMER_ID);

   }

}
