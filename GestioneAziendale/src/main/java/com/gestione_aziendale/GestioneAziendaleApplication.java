package com.gestione_aziendale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
public class GestioneAziendaleApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestioneAziendaleApplication.class, args);
	}

}
