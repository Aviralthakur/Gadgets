package com.gadgets.gadgets.entity;

public class Login {
	  private String mobileNumber;
	    private String passworld;
		public Login(String mobileNumber, String passworld) {
			super();
			this.mobileNumber = mobileNumber;
			this.passworld = passworld;
		}
		public Login() {
			super();
			// TODO Auto-generated constructor stub
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
			return "Login [mobileNumber=" + mobileNumber + ", passworld=" + passworld + "]";
		}
	    
}
