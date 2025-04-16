package com.novaedge.expensoHub.model;

public class TbCrisUserReqModel {

	public String userName;
	public String Password;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	
	public TbCrisUserReqModel(String userName, String password) {
		super();
		this.userName = userName;
		Password = password;
	}
	
	
	public TbCrisUserReqModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	@Override
	public String toString() {
		return "TbCrisUserModel [userName=" + userName + ", Password=" + Password + "]";
	}
	
	
}
