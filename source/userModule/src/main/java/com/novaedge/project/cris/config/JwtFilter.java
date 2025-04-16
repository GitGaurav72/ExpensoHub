package com.novaedge.project.cris.config;

import java.io.IOException;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.novaedge.project.cris.services.TbCrisCustUserDetailsService;
import com.novaedge.project.cris.util.JwtUtil;


@Component
public class JwtFilter extends OncePerRequestFilter {
	
	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private TbCrisCustUserDetailsService service;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {
		
		String authorizationHeade = request.getHeader("Authorization"); 
		String token = null;
	    String username = null;
		if(authorizationHeade != null && authorizationHeade.startsWith("Bearer")) {
			token = authorizationHeade.substring(7);
			username = jwtUtil.extractUsername(token);
	}
		if(username!= null && SecurityContextHolder.getContext().getAuthentication()==null) {
		UserDetails userDetails =	service.loadUserByUsername(username);
		
        if (jwtUtil.validateToken(token, userDetails)) {

            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            usernamePasswordAuthenticationToken
                    .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        }
		}
		filterChain.doFilter(request, response);
	}

}

