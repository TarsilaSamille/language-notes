package com.example.notes.repository.generics;

import com.example.notes.model.generics.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository<N extends Note> extends JpaRepository<N, Long> {

}
