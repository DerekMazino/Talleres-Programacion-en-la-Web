package com.macade.taller8.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.macade.taller8.entity.Persona;

@Repository
public interface PersonRepository extends CrudRepository<Persona, Long> {
	public Optional<Persona> findByUsername(String username);
	
}
