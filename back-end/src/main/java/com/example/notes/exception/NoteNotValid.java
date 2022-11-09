package com.example.notes.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNPROCESSABLE_ENTITY, reason = "Invalid Note")
public class NoteNotValid extends Exception {
	  
    private static final long serialVersionUID = 1149241039409861914L;

    public NoteNotValid(String msg){
        super(msg);
    }

    public NoteNotValid(String msg, Throwable cause){
        super(msg, cause);
    }
}