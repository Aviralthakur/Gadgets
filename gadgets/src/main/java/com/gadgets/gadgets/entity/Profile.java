package com.gadgets.gadgets.entity;



public class Profile {

	


		public String mobileNumber;

		public Profile(String mobileNumber) {
			super();
			this.mobileNumber = mobileNumber;
		}

		public Profile() {
			super();
			// TODO Auto-generated constructor stub
		}

		public String getMobileNumber() {
			return mobileNumber;
		}

		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}

		@Override
		public String toString() {
			return "Profile [mobileNumber=" + mobileNumber + "]";
		}

	
		
}
