package com.gadgets.gadgets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.sym.Name;
import com.gadgets.gadgets.dao.Orderdeo;
import com.gadgets.gadgets.entity.Order;
import com.gadgets.gadgets.entity.Orderitem;
import com.gadgets.gadgets.entity.Profile;

@Service
public class Orderserviceimpl implements Orderservice {

	@Autowired
	private Orderdeo orderdeo;
	
	
	
	@Override
	public String addOrder(List<Orderitem> data) {
		
		try {
		for(int i=0;i<data.size();i++)
		{
			final Orderitem orderitem=new Orderitem();
			orderitem.setMobileNumber(data.get(i).getMobileNumber());
			orderitem.setFname(data.get(i).getFname());
			orderitem.setPrice(data.get(i).getPrice());
			orderitem.setType(data.get(i).getType());
			orderitem.setAddress(data.get(i).getAddress());
			orderitem.setState(data.get(i).getState());
			orderitem.setCity(data.get(i).getCity());
			orderitem.setZip(data.get(i).getZip());
		 orderdeo.save(orderitem);
		}
		return "success";
		}catch(Exception e) {
			return "Error";
		}

	//	return data.get(0).getFname();
		

}
}
