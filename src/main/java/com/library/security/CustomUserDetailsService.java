package com.library.security;

import com.library.dao.UserRepository;
import com.library.entities.User;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service  // This makes it a Spring-managed bean
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;  // Assuming you have a UserRepository

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Fetch the user from the database by username (or email)
        User user = userRepository.findByUsername(username);
        
        if (user == null) {
            throw new UsernameNotFoundException("User not found: " + username);
        }

        // Return an instance of org.springframework.security.core.userdetails.User
        // or your custom User class implementing UserDetails
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPassword())
                .roles(user.getRole())  // Set roles, or you can use Authorities
                .build();
    }
}
