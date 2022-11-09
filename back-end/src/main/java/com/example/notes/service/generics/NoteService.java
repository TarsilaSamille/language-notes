package com.example.notes.service.generics;

import com.example.notes.model.generics.Note;
import com.example.notes.repository.generics.NoteRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("NoteService")
public abstract class NoteService<N extends Note> extends ServiceGeneric<N, NoteRepository<N>> {

  @Autowired
  private NoteRepository<N> noteRepository;
  @Autowired
  private UserService userService;

  public List<String> getFieldsToSort() {
    ArrayList<String> fieldsNote = new ArrayList<>();
    fieldsNote.add("title");
    fieldsNote.add("excerpt");
    fieldsNote.add("content");
    fieldsNote.addAll(getFields());
    return fieldsNote;
  }

  public abstract List<String> getFields();

  public List<N> sortNotes(String field) {
    return sortNotesByField(field);
  }

  public abstract List<N> sortNotesByField(String field);

}