package com.example.TestingDocker4.repositories;

import com.example.TestingDocker4.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM users WHERE users.username = ?1",nativeQuery = true)
    public Optional<User> findByUsername(String username);

    @Query(value = "SELECT * FROM users WHERE users.email = ?1",nativeQuery = true)
    public Optional<User> findByEmail(String email);


}
