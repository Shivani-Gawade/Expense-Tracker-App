package com.example.demo.service;


import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	
	private final UserRepository user;

	public UserService(UserRepository user) 
	{
		this.user = user;
	}
	
	public User save(User users)
	{
		return user.save(users);
	}

	public User Login(String email, String password)
	{
		return user.findByEmail(email)
				.filter(u -> u.getPassword().equals(password))
				.orElse(null);
	}
}
