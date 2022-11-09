package com.example.notes.repository;

import com.example.notes.model.LanguageNote;
import com.example.notes.repository.generics.NoteRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageNoteRepository extends NoteRepository<LanguageNote> {

}
