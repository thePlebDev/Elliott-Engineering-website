package com.example.TestingDocker4.repositories;

import com.example.TestingDocker4.Models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {
}
