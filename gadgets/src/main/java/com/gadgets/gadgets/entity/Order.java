package com.gadgets.gadgets.entity;

public class Order {
public String type;
public String price;
@Override
public String toString() {
	return "Order [type=" + type + ", price=" + price + "]";
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
public Order() {
	super();
	// TODO Auto-generated constructor stub
}
public Order(String type, String price) {
	super();
	this.type = type;
	this.price = price;
}
}
