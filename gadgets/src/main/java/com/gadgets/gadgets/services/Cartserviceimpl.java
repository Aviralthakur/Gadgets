package com.gadgets.gadgets.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadgets.gadgets.dao.Cartdao;
import com.gadgets.gadgets.entity.Cart;
import com.gadgets.gadgets.entity.Detail;
import com.gadgets.gadgets.entity.Profile;

@Service
public class Cartserviceimpl implements Cartservice {

	@Autowired
	private Cartdao cartdao;
	

	
	
	
	@Override
	public Cart setCart(Cart data) {
		
		return cartdao.save(data);
	}





	@Override
	public String deleteCart(Detail data) {
		
		cartdao.deleteById(data.getType());
		return "done";
	}







	@Override
	@Transactional
	public String deleteallCart(Profile data) {
		try {
				cartdao.deleteBymobileNumber(data.getMobileNumber());
		return "deleted";
		}
		catch(Exception e) {
			return "error";
		}
	}





	@Override
	public List<Cart> getCart(Profile mobileNumber) {
		return cartdao.findBymobileNumber(mobileNumber.getMobileNumber());
	}

	
	

}
