package com.example.notes.service.generics;

import com.example.notes.exception.NoteNotValid;
import com.example.notes.exception.ResourceNotFoundException;
import com.example.notes.model.generics.Model;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class ServiceGeneric<T, E extends JpaRepository<T, Long>> implements IServiceGeneric<T> {

  @Autowired
  private E repository;

  public List<T> findAll() {
    return repository.findAll();
  }

  public abstract Boolean validate(T t) throws NoteNotValid;

  public ResponseEntity<String> save(T t) {
    try {
      if (validate(t)) {
        repository.save(t);
        return new ResponseEntity<>(t.toString(), HttpStatus.OK);
      }
      ;
    } catch (NoteNotValid e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
    }
    return new ResponseEntity<>(t.toString(), HttpStatus.NOT_ACCEPTABLE);
  }

  public T findById(Long id) {
    return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("T", "id", id));
  }

  public T update(Long id, T tDetails) {
    ((Model) tDetails).setId(id);
    return repository.save(tDetails);
  }

  public void deleteById(Long id) {
    T t = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("T", "id", id));
    repository.delete(t);
  }
}