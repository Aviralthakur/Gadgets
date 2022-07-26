package com.gadgets.gadgets.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gadgets.gadgets.entity.Gadgets;


public interface Gadgetsdao extends JpaRepository<Gadgets,String> {

}
