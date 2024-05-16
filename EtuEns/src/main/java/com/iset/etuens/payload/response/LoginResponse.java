package com.iset.etuens.payload.response;

import com.iset.etuens.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {


    int userid;
        String message;
        Boolean status;

        Role role;
    String username;


    public LoginResponse(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }

}
