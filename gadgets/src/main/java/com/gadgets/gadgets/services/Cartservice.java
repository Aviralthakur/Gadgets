package com.gadgets.gadgets.services;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import com.gadgets.gadgets.entity.Cart;
import com.gadgets.gadgets.entity.Detail;
import com.gadgets.gadgets.entity.Profile;

public interface Cartservice {
	
	
	 public Cart setCart( Cart data);
	 
	 public String deleteCart(Detail data);
	 
	 public List<Cart> getCart(Profile mobileNumber);
	 
	 public String deleteallCart(Profile data);
	 
}
