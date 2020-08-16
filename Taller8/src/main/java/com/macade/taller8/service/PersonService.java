package com.macade.taller8.service;

import javax.validation.Valid;

import com.macade.taller8.entity.Persona;

public interface PersonService {
	public Iterable<Persona> getAllPersons();

	public Persona createPerson(Persona person) throws Exception;
	
	public Persona getPersonById(Long id) throws Exception;
	
	public Persona updatePersona(Persona fromPerson) throws Exception;
	
	public void deletePerson(Long id) throws Exception;
}
