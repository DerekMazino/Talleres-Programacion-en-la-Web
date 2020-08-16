package com.macade.taller8.controller;



import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.macade.taller8.service.PersonService;
import com.macade.taller8.repository.TipoDocReposotory;
import com.macade.taller8.entity.Persona;
@Controller
public class PersonController {
	@Autowired
	TipoDocReposotory tipoDocRepository;
	@Autowired
	PersonService personService;
	@GetMapping("/")
	public String index() {
		return "index";
	}
	/*@GetMapping("/registro")
	public String registro(Model model) {
		model.addAttribute("tipoDocument", tipoDocRepository.findAll());
		return "registro";
	}*/
	@GetMapping("/personForm")
	public String personForm(Model model) {
		//Colocando anclaje MVC
		model.addAttribute("personForm", new Persona());
		model.addAttribute("personList", personService.getAllPersons());
		model.addAttribute("tipoDocument", tipoDocRepository.findAll());
		model.addAttribute("listTab","active");
		return "person-form/person-view";
	}
	@PostMapping("/personForm")
	public String createPerson(@Valid @ModelAttribute("personForm")Persona person, BindingResult result, ModelMap model) {
		System.out.print("Bandera 1\n");
		if(result.hasErrors()) {
			model.addAttribute("personForm", person);
			model.addAttribute("formTab","active");
			System.out.print("Bandera 2\n");
		}
		else {
			try {
				personService.createPerson(person);
				model.addAttribute("personForm", new Persona());
				model.addAttribute("listTab","active");
			}catch (Exception e) {
				model.addAttribute("formErrorMessage", e.getMessage());
				model.addAttribute("personForm", person);
				model.addAttribute("formTab","active");
				model.addAttribute("personList", personService.getAllPersons());
				model.addAttribute("tipoDocument", tipoDocRepository.findAll());
			}
		}
		model.addAttribute("personList", personService.getAllPersons());
		model.addAttribute("tipoDocument", tipoDocRepository.findAll());
		return "person-form/person-view";
	}
	
	@GetMapping("/editPerson/{id}")
	public String getEditPersonForm(Model model, @PathVariable(name="id") Long id) throws Exception{
		Persona personToEdit = personService.getPersonById(id); 
		model.addAttribute("personForm", personToEdit);
		model.addAttribute("personList", personService.getAllPersons());
		model.addAttribute("tipoDocument", tipoDocRepository.findAll());
		model.addAttribute("formTab","active");
		model.addAttribute("editMode","true");
		return "person-form/person-view";
	}
	
	@PostMapping("/editPerson")
	public String postEditPersonForm(@Valid @ModelAttribute("personForm")Persona person, BindingResult result, ModelMap model) {
		System.out.print("Bandera 1\n");
		if(result.hasErrors()) {
			model.addAttribute("personForm", person);
			model.addAttribute("formTab","active");
			model.addAttribute("editMode","true");
			System.out.print("Bandera 2\n");
		}
		else {
			try {
				personService.updatePersona(person);
				model.addAttribute("personForm", new Persona());
				model.addAttribute("listTab","active");
				model.addAttribute("editMode","false");
			}catch (Exception e) {
				model.addAttribute("formErrorMessage", e.getMessage());
				model.addAttribute("personForm", person);
				model.addAttribute("formTab","active");
				model.addAttribute("personList", personService.getAllPersons());
				model.addAttribute("tipoDocument", tipoDocRepository.findAll());
				model.addAttribute("editMode","true");
			}
		}
		model.addAttribute("personList", personService.getAllPersons());
		model.addAttribute("tipoDocument", tipoDocRepository.findAll());
		return "person-form/person-view";
	}
	
	@GetMapping("/personForm/cancel")
	public String cancelEditPerson(ModelMap model) {
		return "redirect:/personForm";
	}
	
	@GetMapping("/deletePerson/{id}")
	public String deletePerson(Model model, @PathVariable(name="id")Long id) {
		try {
			personService.deletePerson(id);
		} catch (Exception e) {
			model.addAttribute("listErrorMessage",e.getMessage());
		}
		return personForm(model);
	}
}
