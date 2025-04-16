package com.novaedge.expensoHub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.novaedge.expensoHub.entity.TbCrisUserEntity;
import com.novaedge.expensoHub.model.AuthRequest;
import com.novaedge.expensoHub.model.AuthResponse;
import com.novaedge.expensoHub.model.TbCrisUserReqModel;
import com.novaedge.expensoHub.model.TbCrisUserRespModel;
import com.novaedge.expensoHub.service.impl.TbCrisUserService;
import com.novaedge.expensoHub.util.JwtUtil;

@RestController
@RequestMapping("/api")
public class TbCrisLogInController {

	@Autowired
    private TbCrisUserService tbCrisUserService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/login")
	public ResponseEntity<AuthResponse> TbCrisLogInByUserId(@RequestBody AuthRequest authRequest) throws Exception {
		
		  try {
		        authenticationManager.authenticate(
		                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
		        );
		    } catch (Exception ex) {
		        throw new Exception("Invalid Username/Password");
		    }

		    // Generate the JWT token
		    JwtUtil jwtUtil = new JwtUtil();
		    String token = jwtUtil.generateToken(authRequest.getUsername());
		    TbCrisUserEntity usr = tbCrisUserService.getUsrByUsrNm(authRequest.getUsername());

		    // Return the token wrapped in an AuthResponse object as JSON
		    return ResponseEntity.ok(new AuthResponse(token, usr.getId(), usr.getFirstName(),usr.getLastName(), usr.getUserName(), usr.getEmail()));
		
	}
	
	@PostMapping("/signout")
	public TbCrisUserRespModel TbCrisSignoutByUserId(@RequestBody TbCrisUserReqModel tbCrisUserReqModel) {
		
		 return null;
	}
	
	@PostMapping("/register")
	public TbCrisUserEntity TbCrisRegister(@RequestBody TbCrisUserEntity tbCrisUserEntity) {
		return tbCrisUserService.TbCrisRegisterUser(tbCrisUserEntity);
	}
	
}
