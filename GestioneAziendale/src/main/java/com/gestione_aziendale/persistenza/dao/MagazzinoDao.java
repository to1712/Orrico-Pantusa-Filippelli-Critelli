package com.gestione_aziendale.persistenza.dao;

import java.util.List;
import com.gestione_aziendale.persistenza.model.Magazzino;
import com.gestione_aziendale.persistenza.model.Spedizione;

public interface MagazzinoDao {
	
	public List<Magazzino> findAll();
	
	public Magazzino findByProduct(String id);
	
	public Magazzino findBySupplier(String id);
	
	public void saveUpdate(Magazzino m);

	public void updateProdotto(Spedizione s);
	
}
