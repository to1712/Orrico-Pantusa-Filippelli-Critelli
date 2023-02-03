package com.gestione_aziendale.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.gestione_aziendale.persistenza.DBManager;
import com.gestione_aziendale.persistenza.model.Filiale;
import com.gestione_aziendale.persistenza.model.Fornitore;
import com.gestione_aziendale.persistenza.model.Magazzino;
import com.gestione_aziendale.persistenza.model.Prodotto;
import com.gestione_aziendale.persistenza.model.Spedizione;
import com.gestione_aziendale.persistenza.model.Utente;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("http://localhost:4200")
public class UtentiServizi {
	
	@PostMapping("/getUtente")
	public Utente getUtente(HttpServletRequest req ) {
		String [] sessionIdParam=req.getQueryString().split("&")[0].split("=");
		String sessionId=sessionIdParam[1];
		
		if(req.getServletContext().getAttribute(sessionId)!=null) {
			HttpSession session = (HttpSession) req.getServletContext().getAttribute(sessionId);
			Utente u = (Utente) session.getAttribute("user");
			Utente utente= DBManager.getInstance().getUtenteDao().findByPrimaryKey(u.getEmail());
			return utente;
		}
		return null;
	}
	
	@PostMapping("/getUtenti")
	public List<Utente> getUtenti(HttpServletRequest req ) {	
		List<Utente> utenti=DBManager.getInstance().getUtenteDao().findAll();
		return utenti;	
	}
	
	@PostMapping("/getFornitori")
	public List<Fornitore> getFornitori(HttpServletRequest req ) {	
		List<Fornitore> fornitori = DBManager.getInstance().getFornitoreDao().findAll();
		return fornitori;	
	}
	
	@PostMapping("/getFiliali")
	public List<Filiale> getFiliali(HttpServletRequest req ) {	
		List<Filiale> filiali = DBManager.getInstance().getFilialeDao().findAll();
		return filiali;
	}
	
	@PostMapping("/getMagazzino")
	public List<Magazzino> getMagazzino(HttpServletRequest req ) {	
		List<Magazzino> magazzino = DBManager.getInstance().getMagazzinoDao().findAll();
		return magazzino;
	}
	
	@PostMapping("/getSpedizioni")
	public List<Spedizione> getSpedizione(HttpServletRequest req ) {		
		List<Spedizione> spedizione = DBManager.getInstance().getSpedizioneDao().findAll();
		return spedizione;
	}
	
	@PostMapping("/getProdotti")
	public List<Prodotto> getProdotto(HttpServletRequest req ) {	
		List<Prodotto> prodotto = DBManager.getInstance().getProdottoDao().findAll();
		return prodotto;
	}
	
	@PostMapping("/addSpedizione")
	public void setSpedizione(@RequestBody Spedizione spedizione ) {
		 Spedizione s = new Spedizione(spedizione.getProdotto(),spedizione.getFornitore(),spedizione.getFiliale(),spedizione.getQta(),spedizione.getData());
		 DBManager.getInstance().getSpedizioneDao().insert(s);
		 DBManager.getInstance().getMagazzinoDao().updateProdotto(s);
	}
	
	@PostMapping("/addProdotto")
	public void setProdotto(@RequestBody Magazzino magazzino) {
		 Magazzino m = new Magazzino(magazzino.getId_prodotto(),magazzino.getId_fornitore(),magazzino.getQta());
		 DBManager.getInstance().getMagazzinoDao().saveUpdate(m);
	}
	
	@PostMapping("/addDipendente")
	public void setDipendente(@RequestBody Utente d) {
		 Utente u=new Utente(d.getNome(),d.getCognome(),d.getEmail(),d.getPassword(),d.getRuolo(),d.getSede());
		 DBManager.getInstance().getUtenteDao().saveOrUpdate(u);
	}
	
	@PostMapping("/deleteDipendente")
	public void setDipendente(@RequestBody String email ) {
		 DBManager.getInstance().getUtenteDao().delete(email);
	}
	
	@PostMapping("/updateUtente")
	public List<Utente> updateUtente(HttpServletRequest req ) {		
		List<Utente> utenti=DBManager.getInstance().getUtenteDao().findAll();
		return utenti;
	}
	
	@PostMapping("/updateMagazzino")
	public List<Magazzino> updateMagazzino(HttpServletRequest req ) {		
		List<Magazzino> magazzino = DBManager.getInstance().getMagazzinoDao().findAll();
		return magazzino;
	}
	
	@PostMapping("/nuovoStipendio")
	public void nuovoStipendio(@RequestBody Utente utente) {
		DBManager.getInstance().getUtenteDao().updateStipendio(utente.getStipendio(),utente.getEmail());
	}
	
	@PostMapping("/addBilancio")
	public void addBilancio(@RequestBody Filiale filiale) {
		DBManager.getInstance().getFilialeDao().addBilancio(filiale.getId(),filiale.getBilancio());	
	}
	
	@PostMapping("/addTelefono")
	public void addTelefono(@RequestBody Utente utente) {
		DBManager.getInstance().getUtenteDao().updateTelefono(utente.getEmail(), utente.getTelefono());		
	}
	
}
