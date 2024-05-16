package com.iset.etuens.DTO;

import com.iset.etuens.enums.Role;
import lombok.Data;

@Data
public class UserDTO {
    private int userid;
    private String username;
    private String email;
    private String address;
    private String password;
    private Role role;
}
