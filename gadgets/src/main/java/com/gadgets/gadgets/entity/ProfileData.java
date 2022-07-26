package com.gadgets.gadgets.entity;


public class ProfileData {

	public String fname;
    public String lname;
    public String mobileNumber;
	public ProfileData(String fname, String lname, String mobileNumber) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.mobileNumber = mobileNumber;
	}
	public ProfileData() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "ProfileData [fname=" + fname + ", lname=" + lname + ", mobileNumber=" + mobileNumber + "]";
	}

    
}
