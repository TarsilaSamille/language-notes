package com.example.notes.model;

import com.example.notes.model.generics.User;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Learner extends User {

  @NotBlank
  private String studyField;

  @NotBlank
  private String academicDegree;

}
