package com.gadgets.gadgets.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadgets.gadgets.dao.Registerdao;
import com.gadgets.gadgets.entity.Profile;
import com.gadgets.gadgets.entity.Register;

@Service
public   class Registerserviceimpl implements Registerservice {
@Autowired
private Registerdao registerDeo;


	@Override
	public Register addRegister(Register register) {
	
		
		return registerDeo.save(register);
	}
	
	
	
}
