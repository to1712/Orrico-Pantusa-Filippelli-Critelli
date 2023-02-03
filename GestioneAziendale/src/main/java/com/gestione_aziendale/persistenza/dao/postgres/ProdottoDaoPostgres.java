package com.gestione_aziendale.persistenza.dao.postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import com.gestione_aziendale.persistenza.dao.ProdottoDao;
import com.gestione_aziendale.persistenza.model.Prodotto;

public class ProdottoDaoPostgres implements ProdottoDao {
	Connection conn;
	
	public ProdottoDaoPostgres(Connection conn) {
		this.conn = conn;
	}
	
	@Override
	public List<Prodotto> findAll() {
		List<Prodotto> prodotti = new ArrayList<Prodotto>();
		String query = "SELECT * FROM prodotti;";
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				Prodotto prodotto = new Prodotto();
				prodotto.setId(rs.getString("id"));
				prodotto.setFornitoDa(rs.getString("fornito_da"));
				
				prodotti.add(prodotto);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prodotti;
	}

	@Override
	public Prodotto findByPrimaryKey(String id) {
		Prodotto prodotto = null;
		String query = "SELECT * FROM prodotti WHERE id=?;";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, id);
		
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				prodotto = new Prodotto();
				prodotto.setId(rs.getString("id"));
				prodotto.setFornitoDa(rs.getString("fornito_da"));
			}
			
			} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			}
		return prodotto;
	}

	@Override
	public void insert(Prodotto prodotto) {
		if (findByPrimaryKey(prodotto.getId()) == null) {
			String query = "INSERT INTO prodotti VALUES (?, ?)";
			
			PreparedStatement st;
			try {
				st = conn.prepareStatement(query);
				st.setString(1, prodotto.getId());
				st.setString(2, prodotto.getFornitoDa());
				
				st.executeUpdate();		
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return;
	}

	@Override
	public void delete(Prodotto prodotto) {
		String query = "DELETE FROM prodotti WHERE id=?";		
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, prodotto.getId());
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
}
