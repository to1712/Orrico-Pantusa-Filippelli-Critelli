package com.gestione_aziendale.persistenza.dao.postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import com.gestione_aziendale.persistenza.dao.SpedizioneDao;
import com.gestione_aziendale.persistenza.model.Spedizione;

public class SpedizioneDaoPostgres implements SpedizioneDao {
	Connection conn;
	
	public SpedizioneDaoPostgres(Connection conn) {
		this.conn = conn;
	}
	
	@Override
	public List<Spedizione> findAll() {
		List<Spedizione> spedizioni = new ArrayList<Spedizione>();
		String query = "SELECT * FROM spedizioni;";
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				Spedizione spedizione = new Spedizione();
				spedizione.setProdotto(rs.getString("prodotto"));
				spedizione.setFornitore(rs.getString("fornitore"));
				spedizione.setFiliale(rs.getString("filiale"));
				spedizione.setQta(rs.getInt("qta"));
				spedizione.setData(rs.getString("data"));
				
				spedizioni.add(spedizione);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return spedizioni;
	}

	@Override
	public Spedizione findByProduct(String prodotto) {
		Spedizione spedizione = null;
		String query = "SELECT * FROM spedizioni WHERE prodotto=?;";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, prodotto);
		
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				spedizione = new Spedizione();
				spedizione.setProdotto(rs.getString("prodotto"));
				spedizione.setFornitore(rs.getString("fornitore"));
				spedizione.setFiliale(rs.getString("filiale"));
				spedizione.setQta(rs.getInt("qta"));
			}
			
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			}
		return spedizione;
	}

	@Override
	public Spedizione findBySupplier(String fornitore) {
		Spedizione spedizione = null;
		String query = "SELECT * FROM spedizioni WHERE fornitore=?;";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, fornitore);
		
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				spedizione = new Spedizione();
				spedizione.setProdotto(rs.getString("prodotto"));
				spedizione.setFornitore(rs.getString("fornitore"));
				spedizione.setFiliale(rs.getString("filiale"));
				spedizione.setQta(rs.getInt("qta"));
			}
			
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			}
		return spedizione;
	}

	@Override
	public Spedizione findByBranch(String filiale) {
		Spedizione spedizione = null;
		String query = "SELECT * FROM spedizioni WHERE filiale=?;";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, filiale);
		
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				spedizione = new Spedizione();
				spedizione.setProdotto(rs.getString("prodotto"));
				spedizione.setFornitore(rs.getString("fornitore"));
				spedizione.setFiliale(rs.getString("filiale"));
				spedizione.setQta(rs.getInt("qta"));
			}
			
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			}
		return spedizione;
	}

	@Override
	public void insert(Spedizione spedizione) {
			
			String query = "INSERT INTO spedizioni VALUES (?, ?, ?, ?,?)";
			PreparedStatement st;
			try {
				st = conn.prepareStatement(query);
				st.setString(1, spedizione.getProdotto());
				st.setString(2, spedizione.getFornitore());
				st.setString(5, spedizione.getFiliale());
				st.setInt(3, spedizione.getQta());
				st.setString(4, spedizione.getData());
				
				
				st.executeUpdate();		
			} catch (SQLException e) {
				e.printStackTrace();
			}
		/*else {
			String queryUpdate = "UPDATE utente SET nome=?, cognome = ?, password=?, ruolo=?, stipendio=? WHERE email=?";
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
		}	*/
		return;
	}

}
