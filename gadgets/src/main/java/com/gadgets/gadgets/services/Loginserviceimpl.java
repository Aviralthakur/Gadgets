package com.gadgets.gadgets.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadgets.gadgets.dao.Registerdao;
import com.gadgets.gadgets.entity.Login;

@Service
public class Loginserviceimpl implements Loginservice{
	@Autowired
	private Registerdao logdao;
	
	@SuppressWarnings("deprecation")
	@Override
	public String loginstatus(Login login) {
		
		try {
		
		if((logdao.findById(login.getMobileNumber()).isPresent())&&(logdao.getById(login.getMobileNumber()).getPassworld().equals(login.getPassworld())) ){
			return "found";
		}
		
		return "not found";
	}
		catch (Exception e) {
			return e.toString();
		}
	}
	

}
