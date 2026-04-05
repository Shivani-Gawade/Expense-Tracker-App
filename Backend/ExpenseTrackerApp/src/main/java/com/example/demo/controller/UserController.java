package com.example.demo.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:5173")
public class UserController {

	private final UserRepository userRepository;
	private final UserService service;

	//constructor injection - sprig automatically inject dependecies via constructor
	public UserController(UserRepository userRepository, UserService service) 
	{
		this.userRepository = userRepository;
	    this.service = service;
	}
	
	@PostMapping("/signup")
	public User singup(@RequestBody User user)
	{
		return service.save(user);
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user)
	{
		User loggedUser = service.Login(user.getEmail(), user.getPassword());
		
	    if (loggedUser == null) {
	        throw new RuntimeException("Invalid email or password"); // simple for now
	    }

	    return loggedUser;

	}
	

}
