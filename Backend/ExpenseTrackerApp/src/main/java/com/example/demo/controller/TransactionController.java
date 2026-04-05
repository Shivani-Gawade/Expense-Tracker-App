package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.Summary;
import com.example.demo.entity.Transaction;
import com.example.demo.service.TransactionService;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:5173")
public class TransactionController {

	private final TransactionService service;

	public TransactionController(TransactionService service) 
	{
		this.service = service;
	}
	
	@GetMapping
	public List<Transaction> getAllTransactions()
	{
		return service.getAll();
	}
	
	
	@PostMapping
	public Transaction addTransaction(@RequestBody Transaction t, @RequestParam String email)
	{
		return service.addTransaction(t,email);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id)
	{
		service.delete(id);
	}
	
	@GetMapping("/summary")
	public Summary getSummary()
	{
		return service.summary();
	}
	
	@PutMapping("/{id}")
	public  Transaction updateTransaction(@PathVariable Long id, @RequestBody Transaction transaction)
	{
		return service.update(id, transaction);
	}
}









