package com.example.TestingDocker4.Exceptions;

public class BaseCustomErrorMessage extends Exception{

    private String errorMessage;


    public BaseCustomErrorMessage(String errorMessage){
        this.errorMessage = errorMessage;
    }


    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
