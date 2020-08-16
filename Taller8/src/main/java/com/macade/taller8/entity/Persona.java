package com.macade.taller8.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;

@Entity(name = "persona") 
public class Persona implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1671417246199538663L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="native")
	@GenericGenerator(name="native",strategy="native")
	private Long id;
	
	@Column
	@NotBlank
	@Size(min=5, max=8, message="No se cumplen las reglas de la longitud")
	private String firstName;
	@Column
	@NotBlank
	@Size(min=5, max=8, message="No se cumplen las reglas de la longitud")
	private String lastName;
	@Column
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "persona_tipo",
	joinColumns=@JoinColumn(name="persona_id"),
	inverseJoinColumns=@JoinColumn(name="tipodocumento_id"))
	private Set<TipoDocumento> tipo;
	@Column
	@NotBlank
	private String document;
	@Column
	private String city;
	@Column
	@NotBlank
	private String dateB;
	@Column
	@Email
	@NotBlank
	private String email;
	@Column
	private String phone;
	@Column(unique=true)
	@NotBlank
	@Size(min=5, max=8, message="No se cumplen las reglas de la longitud")
	private String username;
	@Column
	@NotBlank
	@Size(min=5, max=8, message="No se cumplen las reglas de la longitud")
	private String password;
	
	@Transient
	@NotBlank
	private String confirmPassword;
	@Column
	private String cityA;
	
	public String getCityA() {
		return cityA;
	}

	public void setCityA(String cityA) {
		this.cityA = cityA;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Set<TipoDocumento> getTipo() {
		return tipo;
	}

	public void setTipo(Set<TipoDocumento> tipo) {
		this.tipo = tipo;
	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getDateB() {
		return dateB;
	}

	public void setDateB(String dateB) {
		this.dateB = dateB;
	}

	@Override
	public String toString() {
		return "Persona [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", tipo=" + tipo
				+ ", document=" + document + ", city=" + city + ", dateB=" + dateB + ", email=" + email + ", phone="
				+ phone + ", username=" + username + ", password=" + password + ", confirmPassword=" + confirmPassword
				+ ", cityA=" + cityA + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((cityA == null) ? 0 : cityA.hashCode());
		result = prime * result + ((confirmPassword == null) ? 0 : confirmPassword.hashCode());
		result = prime * result + ((dateB == null) ? 0 : dateB.hashCode());
		result = prime * result + ((document == null) ? 0 : document.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((phone == null) ? 0 : phone.hashCode());
		result = prime * result + ((tipo == null) ? 0 : tipo.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Persona other = (Persona) obj;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (cityA == null) {
			if (other.cityA != null)
				return false;
		} else if (!cityA.equals(other.cityA))
			return false;
		if (confirmPassword == null) {
			if (other.confirmPassword != null)
				return false;
		} else if (!confirmPassword.equals(other.confirmPassword))
			return false;
		if (dateB == null) {
			if (other.dateB != null)
				return false;
		} else if (!dateB.equals(other.dateB))
			return false;
		if (document == null) {
			if (other.document != null)
				return false;
		} else if (!document.equals(other.document))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (phone == null) {
			if (other.phone != null)
				return false;
		} else if (!phone.equals(other.phone))
			return false;
		if (tipo == null) {
			if (other.tipo != null)
				return false;
		} else if (!tipo.equals(other.tipo))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	
}