package com.gadgets.gadgets.entity;

public class Detail {

	public String type;

	@Override
	public String toString() {
		return "Detail [type=" + type + "]";
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Detail() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Detail(String type) {
		super();
		this.type = type;
	}

	
}
