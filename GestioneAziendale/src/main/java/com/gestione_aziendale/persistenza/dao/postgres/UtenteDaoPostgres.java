package com.gestione_aziendale.persistenza.dao.postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.gestione_aziendale.persistenza.dao.UtenteDao;
import com.gestione_aziendale.persistenza.model.Utente;

public class UtenteDaoPostgres implements UtenteDao {
	
	Connection conn;
	
	public UtenteDaoPostgres(Connection conn) {
		this.conn = conn;
	}
	
	@Override
	public List<Utente> findAll() {
		
		List<Utente> utenti = new ArrayList<Utente>();
		String query = "SELECT * FROM utenti";
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				Utente utente = new Utente();
				utente.setNome(rs.getString("nome"));
				utente.setCognome(rs.getString("cognome"));
				utente.setEmail(rs.getString("email"));
				utente.setPassword(rs.getString("password"));
				utente.setRuolo(rs.getString("ruolo"));
				utente.setStipendio(rs.getFloat("stipendio"));
				utente.setSede(rs.getString("sede"));
				utenti.add(utente);
			}	
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return utenti;
	}

	@Override
	public Utente findByPrimaryKey(String email) {
		Utente utente = null;
		String query = "SELECT * FROM utenti WHERE email=?";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, email);
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				utente = new Utente();
				utente.setNome(rs.getString("nome"));
				utente.setCognome(rs.getString("cognome"));
				utente.setEmail(rs.getString("email"));
				utente.setPassword(rs.getString("password"));
				utente.setRuolo(rs.getString("ruolo"));
				utente.setStipendio(rs.getFloat("stipendio"));
				utente.setTelefono(rs.getString("telefono"));
				utente.setSede(rs.getString("sede"));
			}	
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return utente;
	}

	@Override
	public void saveOrUpdate(Utente utente) {
		if (findByPrimaryKey(utente.getEmail()) == null) {
			String queryInsert = "INSERT INTO utenti VALUES (?, ?, ?, ?, ?,?,?,?)";
			
			PreparedStatement st;
			try {
				st = conn.prepareStatement(queryInsert);
				st.setString(1, utente.getNome());
				st.setString(2, utente.getCognome());
				st.setString(3, utente.getEmail());
				st.setString(4, utente.getPassword());
				st.setString(5, utente.getRuolo());
				st.setFloat(6, utente.getStipendio());
				st.setString(7, "");
				st.setString(8, utente.getSede());
				
				
				st.executeUpdate();		
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}else {
			String queryUpdate = "UPDATE utenti SET nome=?, cognome = ?, password=?, ruolo=?, stipendio=? WHERE email=?";
			PreparedStatement st;
			try {
				st = conn.prepareStatement(queryUpdate);
			
				st.setString(1, utente.getNome());
				st.setString(2, utente.getCognome());
				st.setString(3, utente.getPassword());
				st.setString(4, utente.getRuolo());
				st.setFloat(5, utente.getStipendio());
				st.setString(6, utente.getEmail());
				
				st.executeUpdate();			
			} catch (SQLException e) {
				e.printStackTrace();
			}			
		}	
	}

	@Override
	public void delete(String email) {
		String query = "DELETE FROM utenti WHERE email=?";		
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, email);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Override
	public void updateStipendio(float stipendio,String email) {
		String query = "UPDATE utenti SET stipendio=? WHERE email=?";		
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setFloat(1, stipendio);
			st.setString(2, email);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Override
	public void updateTelefono(String email, String telefono) {
		String query = "UPDATE utenti SET telefono=? WHERE email=?";		
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, telefono);
			st.setString(2, email);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
