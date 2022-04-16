package com.example.TestingDocker4.Models;

import javax.persistence.*;

@Entity
public class StripeCustomer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String customer_id;

    @Column
    private String email;

    @Column
    private String username;

    @OneToOne(mappedBy = "stripeCustomer")
    private User user;

    public StripeCustomer(){}

    public StripeCustomer(String customer_id,String email,String username ){
        this.customer_id = customer_id;
        this.email = email;
        this.username = username;
    }

    public StripeCustomer(String email,String username){
        this.email = email;
        this.username = username;
    }

    //GETTERS
    public Long getId(){
        return this.id;
    }
    public String getCustomer_id(){
        return this.customer_id;
    }
    public String getEmail(){return this.email;}
    public String getUsername(){return this.username;}

    //SETTERS
    public void setCustomer_id(String customer_id){
        this.customer_id = customer_id;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setUsername(String username){
        this.email = email;
    }


}
