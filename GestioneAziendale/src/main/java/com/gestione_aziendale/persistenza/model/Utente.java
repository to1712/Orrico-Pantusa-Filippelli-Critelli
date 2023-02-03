package com.gestione_aziendale.persistenza.model;

public class Utente {
	
	private String nome;
	private String cognome;
	private String email;
	private String password;
	private String ruolo;
	private float stipendio;
	private String telefono;
	private String sede;
	
	public Utente() {}
	public Utente(String nome,String  cognome,String email, String password,String ruolo,String sede) {
		this.nome=nome;
		this.cognome=cognome;
		this.email=email;
		this.password=password;
		this.ruolo=ruolo;
		this.sede=sede;
		
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRuolo() {
		return ruolo;
	}
	public void setRuolo(String ruolo) {
		this.ruolo = ruolo;
	}
	public float getStipendio() {
		return stipendio;
	}
	public void setStipendio(float stipendio) {
		this.stipendio = stipendio;
	}
	public String getSede() {
		return sede;
	}
	public void setSede(String sede) {
		this.sede = sede;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
}
