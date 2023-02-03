package com.gestione_aziendale.persistenza.dao;

import java.util.List;
import com.gestione_aziendale.persistenza.model.Filiale;

public interface FilialeDao {
	
	public List<Filiale> findAll();
	
	public Filiale findByPrimaryKey(String id);
	
	public void delete(Filiale filiale);
	
	public void addBilancio(String id, int bilancio);
}

