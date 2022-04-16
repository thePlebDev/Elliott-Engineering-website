package com.example.TestingDocker4.Models;

import javax.persistence.*;

@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @JoinColumn
    @ManyToOne //the FetchType defaults to eager
    private User user;

    public Role(){}

    public Role(String name){
        this.name = name;
    }

    //GETTERS
    public String getName(){
        return this.name;
    }

    //SETTERS
    public void setName(String name){
        this.name = name;
    }
}
