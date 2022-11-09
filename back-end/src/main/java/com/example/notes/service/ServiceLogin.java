package com.example.notes.service;

import com.example.notes.model.generics.User;
import com.example.notes.service.generics.UserService;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service("LoginService")
public class ServiceLogin {

  @Autowired
  ServiceLogin serviceLogin;
  @Autowired
  UserService serviceUser;

  public static byte[] getSHA(String input) throws NoSuchAlgorithmException {
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    return md.digest(input.getBytes(StandardCharsets.UTF_8));
  }

  public static String toHexString(byte[] hash) {
    BigInteger number = new BigInteger(1, hash);
    StringBuilder hexString = new StringBuilder(number.toString(16));

    while (hexString.length() < 32) {
      hexString.insert(0, '0');
    }

    return hexString.toString();
  }

  @PostMapping("/")
  public User login(@RequestBody User lf) {
    User usuario = serviceUser.findByEmail(lf.getEmail());
    if (usuario != null) {
      try {
        String encryptedLoginPassword = toHexString(getSHA(usuario.getPassword()));
        String encryptedLogin = toHexString(getSHA(lf.getPassword()));
        if (encryptedLoginPassword.equals(encryptedLogin)
            || usuario.getPassword().equals(encryptedLogin)) {
          return usuario;
        }
      } catch (NoSuchAlgorithmException e) {
        System.out.println("Exception thrown for incorrect algorithm: " + e);
      }
    }
    return null;
  }

}