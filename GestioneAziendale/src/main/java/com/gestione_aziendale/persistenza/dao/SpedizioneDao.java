package com.gestione_aziendale.persistenza.dao;

import java.util.List;

import com.gestione_aziendale.persistenza.model.Spedizione;



public interface SpedizioneDao {
	
	public List<Spedizione> findAll();
	
	public Spedizione findByProduct(String prodotto);
	
	public Spedizione findBySupplier(String id);
	
	public Spedizione findByBranch(String id);
	
	public void insert(Spedizione spedizione);
}
