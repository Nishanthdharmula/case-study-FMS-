package com.fullstackproject.UserSecurity.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fullstackproject.UserSecurity.Model.ERole;
import com.fullstackproject.UserSecurity.Model.Role;



public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
