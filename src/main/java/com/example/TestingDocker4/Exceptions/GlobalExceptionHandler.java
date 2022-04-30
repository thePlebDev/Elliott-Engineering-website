package com.example.TestingDocker4.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(HttpStatus.FORBIDDEN) //403
    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<String> handleUsernameNotFound(UsernameNotFoundException ex, WebRequest request){

        return new ResponseEntity<>(ex.getMessage(), HttpStatus.FORBIDDEN);
    }


    @ResponseStatus(HttpStatus.CONFLICT) //409
    @ExceptionHandler(JWTFilterException.class)
    public ResponseEntity<String> handleConflict(JWTFilterException ex, WebRequest request){

        return new ResponseEntity<>(ex.getMessage(), HttpStatus.CONFLICT);
    }
}
