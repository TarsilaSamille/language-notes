package com.example.notes.controller;

import com.example.notes.controller.generics.NoteController;
import com.example.notes.model.LanguageNote;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/language-note")
public class LanguageNoteController extends NoteController<LanguageNote> {

}