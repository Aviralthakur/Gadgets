package com.gadgets.gadgets.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gadgets")
public class Gadgets {
    
	@Id
	private String type;
	private String img;
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Gadgets(String type, String img, String price, String discription) {
		super();
		this.type = type;
		this.img = img;
		this.price = price;
		this.discription = discription;
	}
	private String price;
	private String discription;
	@Override
	public String toString() {
		return "Gadgets [type=" + type + ", img=" + img + ", price=" + price + ", discription=" + discription + "]";
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
	public String getDiscription() {
		return discription;
	}
	public void setDiscription(String discription) {
		this.discription = discription;
	}
	public Gadgets() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Gadgets(String type, String price, String discription) {
		super();
		this.type = type;
		this.price = price;
		this.discription = discription;
	}
	
	
}
