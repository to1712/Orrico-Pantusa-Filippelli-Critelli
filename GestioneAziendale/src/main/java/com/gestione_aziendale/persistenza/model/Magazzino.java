package com.gestione_aziendale.persistenza.model;

public class Magazzino {
	String id_prodotto;
	String id_fornitore;
	int qta;
	public Magazzino() {}
	public Magazzino(String idP,String idF,int qta) {
		this.id_prodotto=idP;
		this.id_fornitore=idF;
		this.qta=qta;
	}
	public String getId_prodotto() {
		return id_prodotto;
	}
	public void setId_prodotto(String id_prodotto) {
		this.id_prodotto = id_prodotto;
	}
	public String getId_fornitore() {
		return id_fornitore;
	}
	public void setId_fornitore(String id_fornitore) {
		this.id_fornitore = id_fornitore;
	}
	public int getQta() {
		return qta;
	}
	public void setQta(int qta) {
		this.qta = qta;
	}
}
