// package com.example.notes.model;

// import org.springframework.data.jpa.domain.support.AuditingEntityListener;

// import javax.persistence.*;
// import javax.validation.constraints.NotBlank;

// @Entity
// @EntityListeners(AuditingEntityListener.class)
// public class Comment extends Model {

// @NotBlank
// private String content;

// @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
// @JoinColumn(name = "id_note")
// private Note note;

// @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
// @JoinColumn(name = "id_user")
// private User user;

// public String getContent() {
// return content;
// }

// public void setContent(String content) {
// this.content = content;
// }

// public User getUser() {
// return user;
// }

// public void setUser(User user) {
// this.user = user;
// }

// public Note getNote() {
// return note;
// }

// public void setNote(Note note) {
// this.note = note;
// }

// }
