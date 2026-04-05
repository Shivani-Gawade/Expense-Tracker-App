package com.example.demo.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="expense")
public class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Long id;
	private Double amount;
	private String transactionType;
	private String category;
	private String description;
	private LocalDate dueDate;
	
	@ManyToOne
	@JoinColumn(name="userId")
	private User user;
	
	public User getUser()
	{
		return user;
	}

	public void setUser(User user) 
	{
		this.user = user;
	}

	public Transaction() {}
	
	public Transaction(Long id, Double amount, String transactionType, String category, String description,
			LocalDate dueDate) 
	{	
		this.id = id;
		this.amount = amount;
		this.transactionType = transactionType;
		this.category = category;
		this.description = description;
		this.dueDate = dueDate;
	}
	

	public Long getId() 
	{
		return id;
	}

	public void setId(Long id) 
	{
		this.id = id;
	}

	public Double getAmount()
	{
		return amount;
	}

	public void setAmount(Double amount) 
	{
		this.amount = amount;
	}

	public String getTransactionType()
	{
		return transactionType;
	}

	public void setTransactionType(String transactionType)
	{
		this.transactionType = transactionType;
	}

	public String getCategory() 
	{
		return category;
	}

	public void setCategory(String category) 
	{
		this.category = category;
	}

	public String getDescription() 
	{
		return description;
	}

	public void setDescription(String description) 
	{
		this.description = description;
	}

	public LocalDate getDueDate() 
	{
		return dueDate;
	}

	public void setDueDate(LocalDate dueDate) 
	{
		this.dueDate = dueDate;
	}	

}
