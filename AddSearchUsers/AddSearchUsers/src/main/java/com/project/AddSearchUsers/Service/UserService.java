package com.project.AddSearchUsers.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.AddSearchUsers.Entity.User;
import com.project.AddSearchUsers.Repository.UsersRepository;

import java.util.List;
@Service
public class UserService {

    @Autowired
    private UsersRepository repo;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User addUser(User user) {
        if (repo.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public List<User> searchUser(String keyword) {
        return repo.findByUsernameContainingOrFirstNameContainingOrLastNameContainingOrEmailContaining(
                keyword, keyword, keyword, keyword);
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User updateUser(Long id, User updatedUser) {
        return repo.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setFirstName(updatedUser.getFirstName());
            user.setLastName(updatedUser.getLastName());
            user.setEmail(updatedUser.getEmail());
            user.setPassword(encoder.encode(updatedUser.getPassword()));
            return repo.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public void deleteUser(Long id) {
        repo.deleteById(id);
    }
    
}
