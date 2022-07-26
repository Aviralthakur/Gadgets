package com.gadgets.gadgets.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadgets.gadgets.dao.Registerdao;
import com.gadgets.gadgets.entity.Profile;
import com.gadgets.gadgets.entity.ProfileData;
import com.gadgets.gadgets.entity.Profileservice;
import com.gadgets.gadgets.entity.Register;


@Service
public class Profileserviceimpl  implements Profileservice  {

	@Autowired
	private Registerdao profiledeo;
	
	
	@SuppressWarnings({ "deprecation" })
	@Override
	public ProfileData getProfile(Profile data) {
		if(profiledeo.getOne(data.getMobileNumber())!=null)
		{
			
			ProfileData profiledata=new ProfileData();
	       profiledata.setFname(profiledeo.getOne(data.getMobileNumber()).getFname());
	       profiledata.setLname(profiledeo.getOne(data.getMobileNumber()).getLname());
	       profiledata.setMobileNumber(profiledeo.getOne(data.getMobileNumber()).getMobileNumber());
	       
	     
			
	       return profiledata;
		}
	
	return null;
	
	
	}
	

}
