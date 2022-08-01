package com.gadgets.gadgets.services;

import java.util.List;

import com.fasterxml.jackson.core.sym.Name;
import com.gadgets.gadgets.entity.Order;
import com.gadgets.gadgets.entity.Orderitem;
import com.gadgets.gadgets.entity.Profile;


public interface Orderservice {
	public String addOrder( List<Orderitem> data);
}
