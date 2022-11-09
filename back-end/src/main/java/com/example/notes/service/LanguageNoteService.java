package com.example.notes.service;

import com.example.notes.exception.NoteNotValid;
import com.example.notes.model.LanguageNote;
import com.example.notes.repository.LanguageNoteRepository;
import com.example.notes.service.generics.NoteService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service("LanguageNoteService")
public class LanguageNoteService extends NoteService<LanguageNote> {

  @Autowired
  private LanguageNoteRepository languageNoteRepository;

  @Override
  public Boolean validate(LanguageNote note) throws NoteNotValid {
    if (note.getCoverImage().isEmpty() || note.getTitle().isEmpty() || note.getExcerpt().isEmpty()
        || note.getTags().isEmpty() || note.getSubject().isEmpty()) {
      throw new NoteNotValid("Field is Empty");
    }
    return true;
  }

  @Override
  public List<String> getFields() {
    ArrayList<String> fieldsLanguageNote = new ArrayList<>();
    fieldsLanguageNote.add("subject");
    return fieldsLanguageNote;
  }

  @Override
  public List<LanguageNote> sortNotesByField(String field) {
    return languageNoteRepository.findAll(Sort.by(Sort.Direction.ASC, field));
  }
}