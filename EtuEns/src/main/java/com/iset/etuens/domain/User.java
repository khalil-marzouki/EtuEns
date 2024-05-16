package com.iset.etuens.domain;

import com.iset.etuens.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;
    @Column(name = "user_name", length = 255)
    private String username;
    @Column(name = "email", length = 255)
    private String email;
    @Column(name = "address", length = 255)
    private String address;
    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "role", length = 255)
    @Enumerated(EnumType.STRING)
    private Role role;

    // Default constructor (required by JPA)
    public User() {}

    // Constructor with parameters
    public User(int userid, String username, String email, String address, String password, Role role) {
        this.userid = userid;
        this.username = username;
        this.email = email;
        this.address = address;
        this.password = password;
        this.role = role;
    }
}
