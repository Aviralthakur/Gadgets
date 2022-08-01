package com.gadgets.gadgets.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gadgets.gadgets.entity.Orderitem;
public interface Orderdeo extends JpaRepository<Orderitem,String> {

}