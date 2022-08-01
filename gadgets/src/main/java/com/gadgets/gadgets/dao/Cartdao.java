package com.gadgets.gadgets.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gadgets.gadgets.entity.Cart;
import com.gadgets.gadgets.entity.Profile;


@Repository
public interface Cartdao extends JpaRepository<Cart,String>{

	List<Cart> findBymobileNumber(String mobileNumber);
	
//	@Query(value="DELETE from cart c where c.mobileNumber=?1",nativeQuery=true)
	 long deleteBymobileNumber(String data);
}
