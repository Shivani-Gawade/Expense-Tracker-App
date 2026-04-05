package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Transaction;
import com.example.demo.entity.User;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.dto.Summary;

@Service
public class TransactionService {

	private final TransactionRepository repo;
	private final UserRepository userRepository;
	
	
	
	public TransactionService(TransactionRepository repo, UserRepository userRepository) 
	{
		this.repo = repo;
		this.userRepository = userRepository;
	}

	public Transaction save(Transaction tran)
	{
		return repo.save(tran);
	}
	
	public List<Transaction> getAll()
	{
		return repo.findAll();
	}
	
	public void delete(Long id) 
	{
		repo.deleteById(id);
	}

	
	public Transaction addTransaction(Transaction t, String email) 
	{
        User user = userRepository.findByEmail(email).orElseThrow();
        t.setUser(user);
        return repo.save(t);
    }
	
	
	
	public Transaction update(Long id, Transaction updatedTransaction) {

	    Transaction existing = repo.findById(id)
	        .orElseThrow(() -> new RuntimeException("Transaction not found"));

	    existing.setDescription(updatedTransaction.getDescription());
	    existing.setAmount(updatedTransaction.getAmount());
	    existing.setCategory(updatedTransaction.getCategory());
	    existing.setTransactionType(updatedTransaction.getTransactionType());

	    return repo.save(existing);
	}
	
	
	public Summary summary() 
	{
		List<Transaction> list = repo.findAll();
		
		double income = 0;
		double expense = 0;
		
		for(Transaction t : list)
		{
			if("INCOME".equals(t.getTransactionType()))
			{
				income += t.getAmount() != null ? t.getAmount() : 0;
			}
			else if("EXPENSE".equals(t.getTransactionType()))
			{
				expense += t.getAmount() != null ? t.getAmount() : 0;
			}
		}
		
		double balance = income - expense;
		
		Summary s = new Summary();
		s.setTotalIncome(income);
		s.setTotalExpense(expense);
		s.setBalance(balance);
		
		return s;	
	}
}
