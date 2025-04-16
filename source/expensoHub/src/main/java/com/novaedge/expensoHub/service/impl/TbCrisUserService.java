package com.novaedge.expensoHub.service.impl;

import java.util.List;
import java.util.UUID;

import org.hibernate.id.UUIDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.novaedge.expensoHub.entity.TbCrisUserEntity;
import com.novaedge.expensoHub.dao.TbCrisUserDao;

@Service
public class TbCrisUserService {

    @Autowired
    private TbCrisUserDao tbCrisUserDao; // Follow camelCase for variable names


	@Autowired
	private PasswordEncoder passwordEncoder;
    /**
     * Fetch a user by their ID.
     *
     * @param id The ID of the user.
     * @return The user entity or null if not found.
     */
    public TbCrisUserEntity TbCrisGetUserById(String id) {
        // Using JpaRepository's findById method
        return tbCrisUserDao.findById(id).orElse(null);
    }

    /**
     * Fetch all users.
     *
     * @return A list of all user entities.
     */
    public List<TbCrisUserEntity> TbCrisGetAllUserById() {
        // Using JpaRepository's findAll method
        return tbCrisUserDao.findAll();
    }

    /**
     * Update a user's details by ID.
     *
     * @param id The ID of the user to update.
     * @param tbCrisUserEntity The updated user details.
     * @return The updated user entity or null if not found.
     */
    public TbCrisUserEntity TbCrisUpdateUserById(String id, TbCrisUserEntity tbCrisUserEnty) {
        // Check if the user exists
    	TbCrisUserEntity tbCrisUserEntity = new TbCrisUserEntity();
        if (tbCrisUserDao.existsById(id)) {
            tbCrisUserEntity.setId(tbCrisUserEnty.getId());
            tbCrisUserEntity.setUserName(tbCrisUserEnty.getUserName());
            tbCrisUserEntity.setPassword(tbCrisUserEnty.getPassword());
            tbCrisUserEntity.setEmail(tbCrisUserEnty.getEmail());
            tbCrisUserEntity.setAbout(tbCrisUserEnty.getAbout());
            // Ensure the ID is correctly
            return tbCrisUserDao.save(tbCrisUserEntity);
        }
        return null;
    }

    /**
     * Delete a user by their ID.
     *
     * @param id The ID of the user to delete.
     * @return True if the user was deleted, false otherwise.
     */
    public boolean deleteUserById(String id) {
        if (tbCrisUserDao.existsById(id)) {
            tbCrisUserDao.deleteById(id);
            return true;
        }
        return false;
    }

    /**
     * Fetch users by a specific attribute (e.g., email).
     *
     * @param email The email of the user.
     * @return A list of users matching the email.
     */
    public TbCrisUserEntity TbCrisRegisterUser(TbCrisUserEntity tbCrisUserEntity) {
    	tbCrisUserEntity.setId(UUID.randomUUID().toString());
    	tbCrisUserEntity.setPassword(passwordEncoder.encode(tbCrisUserEntity.getPassword()));
        return tbCrisUserDao.save(tbCrisUserEntity); // Assuming a custom query in TbCrisUserDao
    }

	public TbCrisUserEntity getUsrByUsrNm(String username) {
		
		return tbCrisUserDao.findByUserName(username);
	}
}
