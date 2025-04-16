package com.novaedge.project.cris.services;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.novaedge.project.cris.dao.TbCrisUserDao;
import com.novaedge.project.cris.entity.TbCrisUserEntity;

@Service
public class TbCrisCustUserDetailsService implements UserDetailsService{

	
	@Autowired
	private TbCrisUserDao tbCrisUserDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		TbCrisUserEntity user = tbCrisUserDao.findByUserName(username);
		return new org.springframework.security.core.userdetails.User(user.getUserName(),user.getPassword(), new ArrayList<>());
	}

}
