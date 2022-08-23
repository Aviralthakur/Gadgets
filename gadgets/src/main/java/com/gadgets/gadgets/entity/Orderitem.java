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
	 private String address;
	 private String city;
	 private String state;
	 private String zip;
	 public Orderitem(long id, String address, String city, String state, String zip, String fname, String mobileNumber,
			String type, String price) {
		super();
		this.id = id;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.fname = fname;
		this.mobileNumber = mobileNumber;
		this.type = type;
		this.price = price;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
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
		return "Orderitem [id=" + id + ", address=" + address + ", city=" + city + ", state=" + state + ", zip=" + zip
				+ ", fname=" + fname + ", mobileNumber=" + mobileNumber + ", type=" + type + ", price=" + price + "]";
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
