package com.example.notes.service;

import com.example.notes.model.Learner;
import com.example.notes.repository.LearnerRepository;
import com.example.notes.service.generics.UserService;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("LearnerService")
public class LearnerService extends UserService<Learner> {

  public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
      Pattern.CASE_INSENSITIVE);
  @Autowired
  private LearnerRepository learnerRepository;

  @Override
  public Boolean validate(Learner user) {
    Learner t = learnerRepository.findByEmail(user.getEmail());
    if (t != null) {
      return false;
    }
    String emailStr = user.getEmail();
    if (emailStr != null && emailStr.length() > 0) {
      Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
      return matcher.find();
    }
    return false;
  }

}