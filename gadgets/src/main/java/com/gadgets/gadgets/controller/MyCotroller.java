package com.gadgets.gadgets.controller;
import java.util.List;
import java.util.Optional;

import javax.xml.crypto.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gadgets.gadgets.entity.Detail;
import com.gadgets.gadgets.entity.Detailinfo;
import com.gadgets.gadgets.entity.Gadgets;
import com.gadgets.gadgets.entity.Login;
import com.gadgets.gadgets.entity.Profile;
import com.gadgets.gadgets.entity.ProfileData;
import com.gadgets.gadgets.entity.Profileservice;
import com.gadgets.gadgets.entity.Register;
import com.gadgets.gadgets.services.Dataservice;
import com.gadgets.gadgets.services.Gadgetservice;
import com.gadgets.gadgets.services.Loginservice;
import com.gadgets.gadgets.services.Registerservice;

@RestController
public class MyCotroller {
	@Autowired
	private Registerservice registerservice;
	
	@Autowired
	private Profileservice profileservice;
	
	@Autowired
	private Loginservice loginservice;
	
	@Autowired
	private Gadgetservice gadgetservice;
	
	@Autowired
	private Dataservice dataservice;

	
	@PostMapping("/login")
	@ResponseBody
	@CrossOrigin
	public String login(@RequestBody Login login )
	{
		return this.loginservice.loginstatus(login);
	}
	
	
	
    @PostMapping("/register")
    @ResponseBody
    @CrossOrigin
    public Register addRegister(@RequestBody  Register register )
    {
    try {
    	
    	 return this.registerservice.addRegister (register) ; 
    }
    catch (Exception e) {
    	System.out.print(e);
    	return null;
    }
    }
    
    @GetMapping("/gadgets")
    @CrossOrigin
    public List<Gadgets> getGadgets()
    {
    	return this.gadgetservice.getGadgets();
    }
    
    
    @PostMapping("/profile")
    @CrossOrigin
    @ResponseBody
     public ProfileData getProfile(@RequestBody Profile data)
    {
    	
    	return this.profileservice.getProfile(data);
    	
    	
    }
    
    
    @PostMapping("/detail")
    @CrossOrigin
    @ResponseBody
    public Detailinfo getData(@RequestBody Detail title) 
    {
    	return this.dataservice.getData(title);
    }



	
	
}
