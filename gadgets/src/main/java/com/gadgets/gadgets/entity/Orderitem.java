package com.gadgets.gadgets.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Orderitem {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private long id;
	 public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Orderitem(long id, String fname, String mobileNumber, String type, String price) {
		super();
		this.id = id;
		this.fname = fname;
		this.mobileNumber = mobileNumber;
		this.type = type;
		this.price = price;
	}
	String fname;
	String mobileNumber;
	
	String type;
	String price;
	@Override
	public String toString() {
		return "Orderitem [id=" + id + ", fname=" + fname + ", mobileNumber=" + mobileNumber + ", type=" + type
				+ ", price=" + price + "]";
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public Orderitem() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
