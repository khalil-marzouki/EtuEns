package com.iset.etuens.controller;

import com.iset.etuens.DTO.UserDTO;
import com.iset.etuens.DTO.LoginDTO;
import com.iset.etuens.DTO.UserDTO2;
import com.iset.etuens.domain.User;
import com.iset.etuens.payload.response.LoginResponse;
import com.iset.etuens.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO)
    {
        String id = userService.addUser(userDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    @GetMapping(path = "/{userId}")
    public ResponseEntity<UserDTO2> getUserById(@PathVariable int userId) {
        UserDTO2 user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserDTO2>> getAllUsers() {
        List<UserDTO2> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}
