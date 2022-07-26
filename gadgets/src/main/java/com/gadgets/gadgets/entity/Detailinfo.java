package com.gadgets.gadgets.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "detailinfo")
public class Detailinfo {
	@Id
	public String type;
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Detailinfo(String type, String discription, String img) {
		super();
		this.type = type;
		this.discription = discription;
		this.img = img;
	}
	public String discription;
	public String img;
	@Override
	public String toString() {
		return "Detailinfo [type=" + type + ", discription=" + discription + ", img=" + img + "]";
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDiscription() {
		return discription;
	}
	public void setDiscription(String discription) {
		this.discription = discription;
	}
	public Detailinfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Detailinfo(String type, String discription) {
		super();
		this.type = type;
		this.discription = discription;
	}
	
}
