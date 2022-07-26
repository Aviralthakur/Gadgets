package com.gadgets.gadgets.entity;



public class Profile {

	


		private String mobileNumber;

		public Profile() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Profile(String mobileNumber) {
			super();
			this.mobileNumber = mobileNumber;
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
