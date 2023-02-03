package com.gestione_aziendale.persistenza.dao;

import java.util.List;
import com.gestione_aziendale.persistenza.model.Utente;


public interface UtenteDao {
	
	public List<Utente> findAll();
	
	public Utente findByPrimaryKey(String email);
	
	public void saveOrUpdate(Utente utente);
	
	public void delete(String email);

	void updateStipendio(float stipendio, String email);

	void updateTelefono(String email, String telefono);
}
