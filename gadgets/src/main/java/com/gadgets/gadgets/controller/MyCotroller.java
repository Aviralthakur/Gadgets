package com.gadgets.gadgets.controller;
import java.util.List;
import java.util.Optional;

import javax.xml.crypto.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.sym.Name;
import com.gadgets.gadgets.entity.Cart;
import com.gadgets.gadgets.entity.Detail;
import com.gadgets.gadgets.entity.Detailinfo;
import com.gadgets.gadgets.entity.Gadgets;
import com.gadgets.gadgets.entity.Login;
import com.gadgets.gadgets.entity.Order;
import com.gadgets.gadgets.entity.Orderitem;
import com.gadgets.gadgets.entity.Profile;
import com.gadgets.gadgets.entity.ProfileData;
import com.gadgets.gadgets.entity.Profileservice;
import com.gadgets.gadgets.entity.Register;
import com.gadgets.gadgets.services.Cartservice;
import com.gadgets.gadgets.services.Dataservice;
import com.gadgets.gadgets.services.Gadgetservice;
import com.gadgets.gadgets.services.Loginservice;
import com.gadgets.gadgets.services.Orderservice;
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
	@Autowired
	private Cartservice cartservice;
	
	@Autowired
	private Orderservice orderservice;
	
	

	@PostMapping("/hello")
	@ResponseBody
	@CrossOrigin
	public String Hello(@RequestBody  String data )
	{
		return data;
	}
	

	
	@PostMapping("/login")
	@ResponseBody
	@CrossOrigin
	public String login(@RequestBody  Login login )
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

     
    @PostMapping("/cart")
    @CrossOrigin
    public Cart setCart(@RequestBody Cart data)
    {
    	return this.cartservice.setCart(data);
    }

    @PostMapping("/getcart")
    @CrossOrigin
    public List<Cart> getCart(@RequestBody Profile data){
    	
          	return this.cartservice.getCart(data);
    }
    
	@DeleteMapping("/cart")
	@CrossOrigin
	public String deleteCart(@RequestBody Detail data)
	{
		return this.cartservice.deleteCart(data);
	}
	
	@DeleteMapping("/order")
	@CrossOrigin
	public String deleteallCart(@RequestBody Profile data)
	{
		return this.cartservice.deleteallCart(data);
	}
	
	
	@PostMapping("/order")
	@CrossOrigin
	@ResponseBody
	public String addOrder(@RequestBody List<Orderitem> data)
	{
		return this.orderservice.addOrder(data);
	}
	
}
