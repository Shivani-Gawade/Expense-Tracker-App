package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="userdata")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private Long userId;
	
	private String name;
	private String email;
	private String password;
	

	public User(){
		
	}
	
	public User(Long userId, String name, String email, String password) 
	{
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public Long getUserId()
	{
		return userId;
	}

	public void setUserId(Long userId) 
	{
		this.userId = userId;
	}

	public String getName() 
	{
		return name;
	}

	public void setName(String name) 
	{
		this.name = name;
	}

	public String getEmail() 
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPassword() 
	{
		return password;
	}

	public void setPassword(String password) 
	{
		this.password = password;
	}
		
}
