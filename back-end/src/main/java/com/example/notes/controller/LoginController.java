package com.example.notes.controller;

import com.example.notes.model.generics.User;
import com.example.notes.service.ServiceLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

  @Autowired
  ServiceLogin serviceLogin;

  @PostMapping("/")
  public User login(@RequestBody User lf) {
    return serviceLogin.login(lf);
  }
}