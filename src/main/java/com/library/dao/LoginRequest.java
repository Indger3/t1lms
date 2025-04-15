package com.library.dao;

public class LoginRequest {

    private String username; // or email
    private String password;

    // Default constructor
    public LoginRequest() {
    }

    // Parameterized constructor
    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Optional: Override toString for better logging
    @Override
    public String toString() {
        return "LoginRequest{" +
                "username='" + username + '\'' +
                ", password='[PROTECTED]'}"; // don't log the password directly
    }
}
