package com.novaedge.expensoHub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.novaedge.expensoHub.entity.TbCrisUserEntity;
import com.novaedge.expensoHub.service.impl.TbCrisUserService;

@RestController
@RequestMapping("/api/user")
public class TbCrisUserController {

    @Autowired
    private TbCrisUserService tbCrisUserService;

    /**
     * Fetch user details by ID.
     *
     * @param id The ID of the user.
     * @return The user entity or null if not found.
     */
    @GetMapping("/detail/{id}")
    public TbCrisUserEntity TbCrisGetUserById(@PathVariable String id) {
        return tbCrisUserService.TbCrisGetUserById(id);
    }

    /**
     * Fetch all user details.
     *
     * @return A list of all user entities.
     */
    @GetMapping("/all/user")
    public List<TbCrisUserEntity> TbCrisGetAllUserById() {
        return tbCrisUserService.TbCrisGetAllUserById();
    }

    /**
     * Update user details by ID.
     *
     * @param id               The ID of the user to update.
     * @param tbCrisUserEntity The user entity with updated details.
     * @return The updated user entity or null if not found.
     */
    @PostMapping("/update/{id}")
    public TbCrisUserEntity TbCrisUpdateUserById(@PathVariable String id, @RequestBody TbCrisUserEntity tbCrisUserEntity) {
        return tbCrisUserService.TbCrisUpdateUserById(id, tbCrisUserEntity);
    }
}
