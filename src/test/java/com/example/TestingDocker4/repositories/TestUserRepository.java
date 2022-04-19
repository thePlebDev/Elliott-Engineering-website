package com.example.TestingDocker4.repositories;

import com.example.TestingDocker4.Models.Role;
import com.example.TestingDocker4.Models.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
public class TestUserRepository {

    @Autowired
    private UserRepository underTest;

    @Test
    public void testFindByEmailTrue(){
        //GIVEN
        String EXPECTED_USERNAME ="IT DO BE LIKE THAT SOMETIMES";
        User user = new User(EXPECTED_USERNAME,"12345");

        //WHEN
        underTest.save(user);
        User foundUser = underTest.findByEmail(EXPECTED_USERNAME).orElseThrow();


        //THEN
        assertThat(foundUser.getEmail()).isEqualTo(EXPECTED_USERNAME);

    }



}
