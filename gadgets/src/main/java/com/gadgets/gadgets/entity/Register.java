package com.gadgets.gadgets.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Register {

//	private Long id=Long.valueOf(1);
	 private String fname;
	    private String lname;
		@Id
	    private String mobileNumber;
	    private String passworld;
	    
//	    public Long getId() {
//			return id++;
//		}
//		public void setId(Long id) {
//			this.id = id;
//		}
	//}
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
		public String getPassworld() {
			return passworld;
		}
		public void setPassworld(String passworld) {
			this.passworld = passworld;
		}
		@Override
		public String toString() {
			return "Register [fname=" + fname + ", lname=" + lname + ", mobileNumber=" + mobileNumber + ", passworld="
					+ passworld + "]";
		}
		public Register() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Register(String fname, String lname, String mobileNumber, String passworld) {
			super();
			this.fname = fname;
			this.lname = lname;
			this.mobileNumber = mobileNumber;
			this.passworld = passworld;
		}
		
		
	
	    
	    
}
