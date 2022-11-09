package com.example.notes.controller;

import com.example.notes.controller.generics.UserController;
import com.example.notes.model.Learner;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/learner")
public class LearnerController extends UserController<Learner> {

}