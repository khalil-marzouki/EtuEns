package com.iset.etuens.DTO;

import com.iset.etuens.domain.User;
import com.iset.etuens.enums.Role;
import lombok.Data;

import java.util.List;

@Data
public class UserDTO2 {
    private int userid;
    private String username;
    private String email;
    private String address;
    private Role role;
}
