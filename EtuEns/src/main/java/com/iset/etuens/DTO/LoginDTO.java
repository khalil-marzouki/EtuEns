package com.iset.etuens.DTO;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {
    private String email;
    private String password;
//
//    public LoginDTO() {
//    }

//    public LoginDTO(String email, String password) {
//        this.email = email;
//        this.password = password;
//    }
}