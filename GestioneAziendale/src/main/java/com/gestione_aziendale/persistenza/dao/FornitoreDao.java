package com.gestione_aziendale.persistenza.dao;

import java.util.List;

import com.gestione_aziendale.persistenza.model.Fornitore;


public interface FornitoreDao {
	
	public List<Fornitore> findAll();
	
	public Fornitore findByPrimaryKey(String nome);
	
	public void delete(Fornitore filiale);
}
