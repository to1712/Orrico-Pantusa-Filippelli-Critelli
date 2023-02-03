package com.gestione_aziendale.persistenza.model;

public class Spedizione {
	String prodotto;
	String fornitore;
	String filiale;
	int qta;
	String data;
	
	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public Spedizione() {}
	
	public Spedizione(String prodotto, String fornitore, String filiale,int qta,String data)
	{
		this.prodotto=prodotto;
		this.fornitore=fornitore;
		this.filiale=filiale;
		this.qta=qta;
		this.data=data;
	}
	
	public String getProdotto() {
		return prodotto;
	}
	public void setProdotto(String prodotto) {
		this.prodotto = prodotto;
	}
	public String getFornitore() {
		return fornitore;
	}
	public void setFornitore(String fornitore) {
		this.fornitore = fornitore;
	}
	public String getFiliale() {
		return filiale;
	}
	public void setFiliale(String filiale) {
		this.filiale = filiale;
	}
	public int getQta() {
		return qta;
	}
	public void setQta(int qta) {
		this.qta = qta;
	}
	
	
}
