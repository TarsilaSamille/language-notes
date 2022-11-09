package com.example.notes.controller.generics;

import com.example.notes.service.generics.ServiceGeneric;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class GenericController<T, E extends JpaRepository<T, Long>> {

  @Autowired
  ServiceGeneric<T, E> service;

  @GetMapping("/")
  public List<T> getAll() {
    return service.findAll();
  }

  @PostMapping("/")
  public ResponseEntity<String> create(@Valid @RequestBody T t) {
    return service.save(t);
  }


  @GetMapping("/{id}")
  public T getById(@PathVariable(value = "id") Long id) {
    return service.findById(id);
  }

  @PostMapping("/{id}")
  public T update(@PathVariable(value = "id") Long id, @Valid @RequestBody T tDetails) {
    return service.update(id, tDetails);
  }

  @DeleteMapping("/{id}")
  public Long delete(@PathVariable(value = "id") Long id) {
    service.deleteById(id);
    return id;
  }
}