package com.macade.taller8.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.macade.taller8.entity.TipoDocumento;

@Repository
public interface TipoDocReposotory extends CrudRepository<TipoDocumento, Long>{
	
}
