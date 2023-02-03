package com.gestione_aziendale.persistenza.dao.postgres;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import com.gestione_aziendale.persistenza.dao.FilialeDao;
import com.gestione_aziendale.persistenza.model.Filiale;

public class FilialeDaoPostgres implements FilialeDao {
	Connection conn;
	
	public FilialeDaoPostgres(Connection conn) {
		this.conn = conn;
	}
	
	@Override
	public List<Filiale> findAll() {
		List<Filiale> filiali = new ArrayList<Filiale>();
		String query = "SELECT * FROM filiali;";
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			
			while (rs.next()) {
				Filiale filiale = new Filiale();
				filiale.setId(rs.getString("identificativo"));
				filiale.setCitta(rs.getString("città"));
				filiale.setIncasso_gen(rs.getFloat("incasso_gennaio"));
				filiale.setIncasso_feb(rs.getFloat("incasso_febbraio"));
				filiale.setIncasso_mar(rs.getFloat("incasso_marzo"));
				filiale.setIncasso_apr(rs.getFloat("incasso_aprile"));
				filiale.setIncasso_mag(rs.getFloat("incasso_maggio"));
				filiale.setIncasso_giu(rs.getFloat("incasso_giugno"));
				filiale.setIncasso_lug(rs.getFloat("incasso_luglio"));
				filiale.setIncasso_ago(rs.getFloat("incasso_agosto"));
				filiale.setIncasso_set(rs.getFloat("incasso_settembre"));
				filiale.setIncasso_ott(rs.getFloat("incasso_ottobre"));
				filiale.setIncasso_nov(rs.getFloat("incasso_novembre"));
				filiale.setIncasso_dic(rs.getFloat("incasso_dicembre"));
				
				filiale.setSpese_gen(rs.getFloat("spese_gennaio"));
				filiale.setSpese_feb(rs.getFloat("spese_febbraio"));
				filiale.setSpese_mar(rs.getFloat("spese_marzo"));
				filiale.setSpese_apr(rs.getFloat("spese_aprile"));
				filiale.setSpese_mag(rs.getFloat("spese_maggio"));
				filiale.setSpese_giu(rs.getFloat("spese_giugno"));
				filiale.setSpese_lug(rs.getFloat("spese_luglio"));
				filiale.setSpese_ago(rs.getFloat("spese_agosto"));
				filiale.setSpese_set(rs.getFloat("spese_settembre"));
				filiale.setSpese_ott(rs.getFloat("spese_ottobre"));
				filiale.setSpese_nov(rs.getFloat("spese_novembre"));
				filiale.setSpese_dic(rs.getFloat("spese_dicembre"));
				
				filiale.setBilancio(rs.getInt("bilancio"));
				
				filiali.add(filiale);
			}	
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return filiali;
	}

	@Override
	public Filiale findByPrimaryKey(String id) {
		Filiale filiale = null;
		String query = "SELECT * FROM filiali WHERE id=?;";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, id);
		
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				filiale = new Filiale();
				filiale.setId(rs.getString("identificativo"));
				filiale.setCitta(rs.getString("città"));
				filiale.setIncasso_gen(rs.getFloat("incasso_gennaio"));
				filiale.setIncasso_feb(rs.getFloat("incasso_febbraio"));
				filiale.setIncasso_mar(rs.getFloat("incasso_marzo"));
				filiale.setIncasso_apr(rs.getFloat("incasso_aprile"));
				filiale.setIncasso_mag(rs.getFloat("incasso_maggio"));
				filiale.setIncasso_giu(rs.getFloat("incasso_giugno"));
				filiale.setIncasso_lug(rs.getFloat("incasso_luglio"));
				filiale.setIncasso_ago(rs.getFloat("incasso_agosto"));
				filiale.setIncasso_set(rs.getFloat("incasso_settembre"));
				filiale.setIncasso_ott(rs.getFloat("incasso_ottobre"));
				filiale.setIncasso_nov(rs.getFloat("incasso_novembre"));
				filiale.setIncasso_dic(rs.getFloat("incasso_dicembre"));
				
				filiale.setSpese_gen(rs.getFloat("spese_gennaio"));
				filiale.setSpese_feb(rs.getFloat("spese_febbraio"));
				filiale.setSpese_mar(rs.getFloat("spese_marzo"));
				filiale.setSpese_apr(rs.getFloat("spese_aprile"));
				filiale.setSpese_mag(rs.getFloat("spese_maggio"));
				filiale.setSpese_giu(rs.getFloat("spese_giugno"));
				filiale.setSpese_lug(rs.getFloat("spese_luglio"));
				filiale.setSpese_ago(rs.getFloat("spese_agosto"));
				filiale.setSpese_set(rs.getFloat("spese_settembre"));
				filiale.setSpese_ott(rs.getFloat("spese_ottobre"));
				filiale.setSpese_nov(rs.getFloat("spese_novembre"));
				filiale.setSpese_dic(rs.getFloat("spese_dicembre"));
				
				filiale.setBilancio(rs.getInt("bilancio"));
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return filiale;
		
	}

	@Override
	public void delete(Filiale filiale) {
		String query = "DELETE FROM filiali WHERE id = ?";		
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, filiale.getId());
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
	
	@Override
	public void addBilancio(String id, int bilancio) {
		String query = "UPDATE filiali SET bilancio=? WHERE identificativo=?";		
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setInt(1, bilancio);
			st.setString(2, id);
			st.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
}
