package com.example.notes.repository.generics;

import com.example.notes.model.generics.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository<U extends User> extends JpaRepository<U, Long> {

  U findByEmail(String Email);
}
