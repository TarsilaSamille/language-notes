package com.example.notes.repository;

import com.example.notes.model.Learner;
import com.example.notes.repository.generics.UserRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearnerRepository extends UserRepository<Learner> {

}
