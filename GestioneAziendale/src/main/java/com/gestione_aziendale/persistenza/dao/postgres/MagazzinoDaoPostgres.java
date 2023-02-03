package com.gestione_aziendale.persistenza.dao.postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.gestione_aziendale.persistenza.dao.MagazzinoDao;
import com.gestione_aziendale.persistenza.model.Magazzino;
import com.gestione_aziendale.persistenza.model.Spedizione;

public class MagazzinoDaoPostgres implements MagazzinoDao {
	Connection conn;
	
	public MagazzinoDaoPostgres(Connection conn) {
		this.conn = conn;
	}
	
	@Override
	public List<Magazzino> findAll() {
		List<Magazzino> magazzini = new ArrayList<Magazzino>();
		String query = "SELECT * FROM magazzino;";
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				Magazzino magazzino = new Magazzino();
				magazzino.setId_prodotto(rs.getString("id_prodotto"));
				magazzino.setId_fornitore(rs.getString("id_fornitore"));
				magazzino.setQta(rs.getInt("qta"));
				
				magazzini.add(magazzino);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return magazzini;
	}

	@Override
	public Magazzino findByProduct(String id) {
		Magazzino magazzino = null;
		String query = "SELECT * FROM magazzino WHERE id_prodotto=?;";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, id);
		
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				magazzino = new Magazzino();
				magazzino.setId_prodotto(rs.getString("id_prodotto"));
				magazzino.setId_fornitore(rs.getString("id_fornitore"));
				magazzino.setQta(rs.getInt("qta"));
			}
			
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			}
		return magazzino;
	}

	@Override
	public Magazzino findBySupplier(String id) {
		Magazzino magazzino = null;
		String query = "SELECT * FROM magazzino WHERE id_fornitore=?;";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, id);
		
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				magazzino = new Magazzino();
				magazzino.setId_prodotto(rs.getString("id_prodotto"));
				magazzino.setId_fornitore(rs.getString("id_fornitore"));
				magazzino.setQta(rs.getInt("qta"));
			}
			
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			}
		return magazzino;
	}

	@Override
	public void saveUpdate(Magazzino m) {
		if(findByProduct(m.getId_prodotto())==null) {
			String query= "INSERT INTO magazzino VALUES(?,?,?)";
			try {
				PreparedStatement st=conn.prepareStatement(query);
				st.setString(1, m.getId_prodotto());
				st.setString(2, m.getId_fornitore());
				st.setInt(3, m.getQta());
				
				st.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		else {
			String query="UPDATE magazzino SET qta=qta+? WHERE id_prodotto=? and id_fornitore=? ";
			try {
				PreparedStatement st=conn.prepareStatement(query);
				st.setInt(1, m.getQta());
				st.setString(2,m.getId_prodotto());
				st.setString(3, m.getId_fornitore());
				st.executeUpdate();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public void updateProdotto(Spedizione s) {
		String query="UPDATE magazzino SET qta=qta-? WHERE id_prodotto=? and id_fornitore=?";
		try {
			PreparedStatement st=conn.prepareStatement(query);
			st.setInt(1, s.getQta());
			st.setString(2,s.getProdotto());
			st.setString(3, s.getFornitore());
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		
		}
	}
}
