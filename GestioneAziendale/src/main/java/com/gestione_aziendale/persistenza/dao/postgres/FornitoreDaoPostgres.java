package com.gestione_aziendale.persistenza.dao.postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import com.gestione_aziendale.persistenza.dao.FornitoreDao;
import com.gestione_aziendale.persistenza.model.Fornitore;

public class FornitoreDaoPostgres implements FornitoreDao {
	Connection conn;
	
	public FornitoreDaoPostgres(Connection conn) {
		this.conn = conn;
	}
	
	@Override
	public List<Fornitore> findAll() {
		List<Fornitore> fornitori = new ArrayList<Fornitore>();
		String query = "SELECT * FROM fornitori;";
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				Fornitore fornitore = new Fornitore();
				fornitore.setNome(rs.getString("nome"));
				fornitore.setCitta_provenienza(rs.getString("città_provenienza"));
				
				fornitori.add(fornitore);
			}
		} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return fornitori;
	}

	@Override
	public Fornitore findByPrimaryKey(String nome) {
		Fornitore fornitore = null;
		String query = "SELECT * FROM fornitori WHERE nome=?";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, nome);
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				fornitore = new Fornitore();
				fornitore.setNome(rs.getString("nome"));
				fornitore.setCitta_provenienza(rs.getString("città_provenienza"));
			}	
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return fornitore;
	}

	@Override
	public void delete(Fornitore filiale) {
		String query = "DELETE FROM fornitori WHERE nome=?";		
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, filiale.getNome());
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
