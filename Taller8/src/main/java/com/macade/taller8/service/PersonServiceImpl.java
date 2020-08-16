package com.macade.taller8.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.macade.taller8.entity.Persona;
import com.macade.taller8.repository.PersonRepository;

@Service
public class PersonServiceImpl implements PersonService{
	
	@Autowired
	PersonRepository repository;
	
	@Override
	public Iterable<Persona> getAllPersons() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}
	private boolean checkUsernameAvaliable(Persona person) throws Exception{
		Optional <Persona> userFound =  repository.findByUsername(person.getUsername());
		if(userFound.isPresent()) {
			throw new Exception("Username no disponible");
		}
		return true;
	}
	
	private boolean checkPasswordValid(Persona person) throws Exception{
		if(!person.getPassword().equals(person.getConfirmPassword())) {
			throw new Exception("Las contraseñas no coinciden");
		}
		return  true;
	}
	@Override
	public Persona createPerson(Persona person) throws Exception {
		// TODO Auto-generated method stub
		if(checkUsernameAvaliable(person) && checkPasswordValid(person)) {
			person = repository.save(person);
		}
		return person;
	}
	@Override
	public Persona getPersonById(Long id) throws Exception {

		return repository.findById(id).orElseThrow(() -> new Exception("El ususario no existe"));
	}
	@Override
	public Persona updatePersona(Persona fromPerson) throws Exception {
		Persona toPerson = getPersonById(fromPerson.getId());
		mapPerson(fromPerson, toPerson);
		return repository.save(toPerson);
	}
	

	protected void mapPerson(Persona from,Persona to) {
		to.setUsername(from.getUsername());
		to.setFirstName(from.getFirstName());
		to.setLastName(from.getLastName());
		to.setEmail(from.getEmail());
		to.setTipo(from.getTipo());
		to.setCity(from.getCity());
		to.setCityA(from.getCityA());
		to.setPhone(from.getPhone());
		to.setDateB(from.getDateB());
		to.setDocument(from.getDocument());
	}
	@Override
	public void deletePerson(Long id) throws Exception {
		Persona person = getPersonById(id);
		repository.delete(person);
	}
	
	
	
}
