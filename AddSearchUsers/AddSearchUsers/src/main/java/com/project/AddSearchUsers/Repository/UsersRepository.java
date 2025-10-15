package com.project.AddSearchUsers.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.AddSearchUsers.Entity.User;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, Long> {
	
	    boolean existsByUsername(String username);
	    List<User> findByUsernameContainingOrFirstNameContainingOrLastNameContainingOrEmailContaining(
	            String username, String firstName, String lastName, String email);
	}
