package com.gadgets.gadgets.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name ="cart")
@Table(name = "cart")
public class Cart {
	@Id
     public String type;
     public String price;
     public String img;
     public String mobileNumber;
     public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public Cart(String type, String price, String img, String mobileNumber) {
		super();
		this.type = type;
		this.price = price;
		this.img = img;
		this.mobileNumber = mobileNumber;
	}
	
	@Override
	public String toString() {
		return "Cart [type=" + type + ", price=" + price + ", img=" + img + ", mobileNumber=" + mobileNumber + "]";
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
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cart(String type, String price, String img) {
		super();
		this.type = type;
		this.price = price;
		this.img = img;
	}
}
