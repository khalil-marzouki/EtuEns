package com.iset.etuens.repository;


import com.iset.etuens.DTO.UserDTO2;
import com.iset.etuens.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    Optional<User> findOneByEmailAndPassword(String email, String password);
    User findByEmail(String email);

}
