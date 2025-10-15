package com.project.AddSearchUsers.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.AddSearchUsers.Entity.User;
import com.project.AddSearchUsers.Service.UserService;

import java.util.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/add")
    public Map<String, Object> addUser(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        try {
            User savedUser = service.addUser(user);
            response.put("message", "User added successfully");
            response.put("data", savedUser);
        } catch (RuntimeException e) {
            response.put("message", e.getMessage());
        }
        return response;
    }

    @PostMapping("/search")
    public List<User> searchUser(@RequestBody Map<String, String> body) {
        String keyword = body.getOrDefault("keyword", "");
        return service.searchUser(keyword);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @PutMapping("/update/{id}")
    public Map<String, Object> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Map<String, Object> response = new HashMap<>();
        response.put("data", service.updateUser(id, updatedUser));
        response.put("message", "User updated successfully");
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, String> deleteUser(@PathVariable Long id) {
        service.deleteUser(id);
        return Map.of("message", "User deleted successfully");
    }
}
