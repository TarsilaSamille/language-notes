package com.example.notes.controller.generics;

import com.example.notes.model.generics.Note;
import com.example.notes.repository.generics.NoteRepository;
import com.example.notes.service.generics.NoteService;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class NoteController<N extends Note> extends GenericController<N, NoteRepository<N>> {

  @Autowired
  private NoteService<N> noteService;

  @Override
  @PostMapping("/")
  public ResponseEntity<String> create(@Valid @RequestBody N n) {
    return noteService.save(n);
  }

  @GetMapping("/fields")
  public List<String> getFieldsToSort() {
    return noteService.getFieldsToSort();
  }

  @GetMapping("/sort/{field}")
  public List<N> sortNotes(@PathVariable String field) {
    return noteService.sortNotes(field);
  }

}