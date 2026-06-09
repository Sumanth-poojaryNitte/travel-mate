package com.travelmate.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_trips")
public class UserTrip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String mobile;
    private String mail;
    private String fromLocation;
    private String toLocation;
    private String date;
    private String image;

    // Default constructor
    public UserTrip() {
    }

    // Parameterized constructor
    public UserTrip(String name, String mobile, String mail,
                    String fromLocation, String toLocation, String date) {
        this.name = name;
        this.mobile = mobile;
        this.mail = mail;
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.date = date;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
    }

    public String getToLocation() {
        return toLocation;
    }

    public void setToLocation(String toLocation) {
        this.toLocation = toLocation;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
    public String getImage(){
        return image;
    }
    public void setImage(String image){
        this.image=image;
    }
}