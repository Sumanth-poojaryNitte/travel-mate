package com.travelmate.controller;

import com.travelmate.model.User;
import com.travelmate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @PostMapping("/register")
    public User register(@RequestBody User user) {

        user.setPassword(
                encoder.encode(user.getPassword())
        );

        return userRepository.save(user);
    }
    @PostMapping("/login")
public String login(@RequestBody User user) {

    User dbUser =
            userRepository.findByEmail(user.getEmail());

    if(dbUser == null) {
        return "User not found";
    }

    if(encoder.matches(
            user.getPassword(),
            dbUser.getPassword())) {

        return "Login Successful";
    }

    return "Invalid Password";
}
}