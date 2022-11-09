package com.example.notes.service.generics;

import com.example.notes.exception.NoteNotValid;
import com.example.notes.model.generics.User;
import com.example.notes.repository.generics.UserRepository;
import java.util.regex.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("UserService")
public abstract class UserService<U extends User> extends ServiceGeneric<U, UserRepository<U>> {

  public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
      Pattern.CASE_INSENSITIVE);
  @Autowired
  UserRepository<U> userRepository;
  @Autowired
  private UserRepository<U> repositoryUser;

  public U findByEmail(String email) {
    return repositoryUser.findByEmail(email);
  }

  public U create(U user) {
    User usr = userRepository.findByEmail(user.getEmail());
    try {
      if (validate(user)) {
        return userRepository.save(user);
      }
    } catch (NoteNotValid e) {
      e.printStackTrace();
    }
    return null;
  }

}