package com.example.notes.model.generics;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@EntityListeners(AuditingEntityListener.class)
public abstract class User extends Model {

  @NotBlank
  private String firstName;

  @NotBlank
  private String lastName;

  @NotBlank
  private String password;

  @Column(unique = true)
  @NotBlank
  private String email;

  @NotBlank
  private String type;

  @NotBlank
  private String picture;

  @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
  @JsonManagedReference
  private Set<Note> notes;

}
