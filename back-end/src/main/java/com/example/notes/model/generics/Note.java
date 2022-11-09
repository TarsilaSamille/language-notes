package com.example.notes.model.generics;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.annotations.Type;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@EntityListeners(AuditingEntityListener.class)
public abstract class Note extends Model {

  private static final String USER_ID = "user_id";

  @NotBlank
  private String title;

  @NotBlank
  private String tags;

  @NotBlank
  private String excerpt;

  @NotBlank
  @Lob
  @Type(type = "text")
  private String content;

  @NotBlank
  private String coverImage;

  @ManyToOne
  @JoinColumn(name = USER_ID)
  @JsonBackReference
  private User user;

}
