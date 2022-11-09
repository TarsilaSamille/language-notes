package com.example.notes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class IndexController {

    @GetMapping
    public String sayHello() {
        return "Hello and Welcome to the FeynmanNotes application. You can create a new Note by making a POST request to /api/notes endpoint.";
    }
}
