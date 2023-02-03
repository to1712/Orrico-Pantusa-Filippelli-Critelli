package com.gestione_aziendale.persistenza;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.gestione_aziendale.persistenza.dao.FilialeDao;
import com.gestione_aziendale.persistenza.dao.FornitoreDao;
import com.gestione_aziendale.persistenza.dao.MagazzinoDao;
import com.gestione_aziendale.persistenza.dao.ProdottoDao;
import com.gestione_aziendale.persistenza.dao.SpedizioneDao;
import com.gestione_aziendale.persistenza.dao.UtenteDao;
import com.gestione_aziendale.persistenza.dao.postgres.FilialeDaoPostgres;
import com.gestione_aziendale.persistenza.dao.postgres.FornitoreDaoPostgres;
import com.gestione_aziendale.persistenza.dao.postgres.MagazzinoDaoPostgres;
import com.gestione_aziendale.persistenza.dao.postgres.ProdottoDaoPostgres;
import com.gestione_aziendale.persistenza.dao.postgres.SpedizioneDaoPostgres;
import com.gestione_aziendale.persistenza.dao.postgres.UtenteDaoPostgres;

public class DBManager {
	private static DBManager instance = null;
	Connection conn;
	
	private DBManager() {}
	
	public static DBManager getInstance() {
		if(instance == null)
			instance = new DBManager();
		return instance;
	}
	
	public Connection getConnession()
	{
		if(conn == null)
			try {
				conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "juventus17");
			} catch (SQLException e) {
				e.printStackTrace();
			}
		return conn;
	}
	
	public UtenteDao getUtenteDao() {
		return new UtenteDaoPostgres(getConnession());
	}
	
	public FornitoreDao getFornitoreDao() {
		return new FornitoreDaoPostgres(getConnession());
	}
	
	public FilialeDao getFilialeDao() {
		return new FilialeDaoPostgres(getConnession());
	}
	
	public ProdottoDao getProdottoDao() {
		return new ProdottoDaoPostgres(getConnession());
	}
	
	public MagazzinoDao getMagazzinoDao() {
		return new MagazzinoDaoPostgres(getConnession());
	}
	
	public SpedizioneDao getSpedizioneDao() {
		return new SpedizioneDaoPostgres(getConnession());
	}
	
}
