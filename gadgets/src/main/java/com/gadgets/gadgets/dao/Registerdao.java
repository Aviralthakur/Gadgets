package com.gadgets.gadgets.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gadgets.gadgets.entity.Profile;
import com.gadgets.gadgets.entity.Register;

public interface Registerdao extends JpaRepository<Register,String> {

	
	 

}
