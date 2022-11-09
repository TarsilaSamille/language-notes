package com.example.notes.service.generics;

import java.util.List;
import org.springframework.http.ResponseEntity;

public interface IServiceGeneric<T> {

  List<T> findAll();

  ResponseEntity<String> save(T entity);

  T findById(Long id);

  void deleteById(Long id);

  T update(Long id, T tDetails);
}