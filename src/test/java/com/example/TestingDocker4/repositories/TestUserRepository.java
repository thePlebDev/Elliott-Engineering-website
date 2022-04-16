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
    public void testFindUser(){
        //GIVEN
        String EXPECTED_USERNAME = "BOB";
        User user = new User(EXPECTED_USERNAME,"12345","meail@mail.com");

        //WHEN
        underTest.save(user);
        User foundUser = underTest.getById(1l);

        //THEN
        assertThat(foundUser.getUsername()).isEqualTo(EXPECTED_USERNAME);

    }

    @Test
    public void testFindUserByUsername(){
        //GIVEN
        String EXPECTED_USERNAME = "BOB";
        User user = new User(EXPECTED_USERNAME,"12345","meail@mail.com");

        //WHEN
        underTest.save(user);
       User foundUser = underTest.findByUsername(EXPECTED_USERNAME).orElseThrow();

       //THEN
        assertThat(foundUser.getUsername()).isEqualTo(EXPECTED_USERNAME);

    }

    @Test
    public void testFindByEmailTrue(){
        //GIVEN
        String EXPECTED_EMAIL = "bob@bobmail.com";
        User user = new User("BOB","12345",EXPECTED_EMAIL);


        //WHEN
        underTest.save(user);
        User foundUser = underTest.findByEmail(EXPECTED_EMAIL).orElseThrow();

        //THEN
        assertThat(foundUser.getEmail()).isEqualTo(EXPECTED_EMAIL);
    }



}
