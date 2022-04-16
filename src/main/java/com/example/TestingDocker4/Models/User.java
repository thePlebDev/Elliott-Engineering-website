package com.example.TestingDocker4.Models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn
    private StripeCustomer stripeCustomer;

    @Column(unique = true)
    private String username;

    @Column
    private String password;

    @Column
    private String email;


    public User(){}
    public User(String username, String password, String email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    //GETTERS
    public String getUsername(){
        return this.username;
    }
    public String getPassword(){
        return this.password;
    }
    public String getEmail(){
        return this.email;
    }
    public Long getId(){
        return this.id;
    }
    public StripeCustomer getStripeCustomer(){return this.stripeCustomer;}



    //SETTERS
    public void setUsername(String username){
        this.username = username;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setStripeCustomer(StripeCustomer stripeCustomer){this.stripeCustomer = stripeCustomer;}


}
