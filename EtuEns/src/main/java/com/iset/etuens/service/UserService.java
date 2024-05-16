package com.iset.etuens.service;

import com.iset.etuens.DTO.UserDTO;
import com.iset.etuens.DTO.LoginDTO;
import com.iset.etuens.DTO.UserDTO2;
import com.iset.etuens.domain.User;
import com.iset.etuens.payload.response.LoginResponse;

import java.util.List;


public interface UserService {
    String addUser(UserDTO userDTO);
    LoginResponse loginUser(LoginDTO loginDTO);
    UserDTO2 getUserById(int userId);
    List<UserDTO2> getAllUsers();
}

