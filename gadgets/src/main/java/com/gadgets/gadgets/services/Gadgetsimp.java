package com.gadgets.gadgets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadgets.gadgets.dao.Gadgetsdao;
import com.gadgets.gadgets.entity.Gadgets;

@Service
public class Gadgetsimp implements Gadgetservice {

	@Autowired
	private Gadgetsdao gadgetdeo;
	
	
	@Override
	public List<Gadgets> getGadgets() {
		
		return gadgetdeo.findAll();
	}
	

}
