package com.example.TestingDocker4.Exceptions;

public class JWTFilterException extends IllegalStateException {

    private String message;

    public JWTFilterException(String message){
        this.message = message;
    }


    public String getMessage(){
        return this.message;
    }
}
