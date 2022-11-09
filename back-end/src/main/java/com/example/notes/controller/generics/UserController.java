package com.example.notes.controller.generics;

import com.example.notes.model.generics.User;
import com.example.notes.repository.generics.UserRepository;
import com.example.notes.service.generics.UserService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class UserController<U extends User> extends GenericController<U, UserRepository<U>> {

  @Autowired
  private UserService<U> userService;

  @Override
  @PostMapping("/")
  public ResponseEntity<String> create(@Valid @RequestBody U u) {
    return userService.save(u);
  }
}