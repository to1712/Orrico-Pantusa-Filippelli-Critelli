package com.gestione_aziendale.persistenza.dao;

import java.util.List;
import com.gestione_aziendale.persistenza.model.Prodotto;


public interface ProdottoDao {
	
	public List<Prodotto> findAll();
	
	public Prodotto findByPrimaryKey(String id);
	
	public void insert(Prodotto prodotto);
	
	public void delete(Prodotto prodotto);
}
