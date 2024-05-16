package com.iset.etuens.service.impl;

import com.iset.etuens.DTO.UserDTO;
import com.iset.etuens.DTO.LoginDTO;
import com.iset.etuens.DTO.UserDTO2;
import com.iset.etuens.domain.User;
import com.iset.etuens.payload.response.LoginResponse;
import com.iset.etuens.repository.UserRepository;
import com.iset.etuens.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class UserIMPL implements UserService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getAddress(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getRole()
        );
        userRepo.save(user);
        return user.getUsername();
    }
    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
       // String msg = "";
        User user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse(user1.getUserid(),"Login Success", true, user1.getRole(),user1.getUsername());
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }
    @Override
    public UserDTO2 getUserById(int userId) {
        Optional<User> userOptional = userRepo.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            UserDTO2 userDTO2 = new UserDTO2();
            userDTO2.setUserid(user.getUserid());
            userDTO2.setUsername(user.getUsername());
            userDTO2.setEmail(user.getEmail());
            userDTO2.setAddress(user.getAddress());
            userDTO2.setRole(user.getRole());
            return userDTO2;
        } else {
            return null;
        }
    }

    @Override
    public List<UserDTO2> getAllUsers() {
        List<User> users = userRepo.findAll();
        List<UserDTO2> userDTOs = new ArrayList<>();
        for (User user : users) {
            UserDTO2 userDTO2 = new UserDTO2();
            userDTO2.setUserid(user.getUserid());
            userDTO2.setUsername(user.getUsername());
            userDTO2.setEmail(user.getEmail());
            userDTO2.setAddress(user.getAddress());
            userDTO2.setRole(user.getRole());
            userDTOs.add(userDTO2);
        }
        return userDTOs;
    }
}
