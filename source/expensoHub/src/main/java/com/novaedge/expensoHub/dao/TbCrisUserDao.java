package com.novaedge.expensoHub.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.novaedge.expensoHub.entity.TbCrisUserEntity;

@Repository
public interface TbCrisUserDao extends JpaRepository<TbCrisUserEntity, String> {

	TbCrisUserEntity findByUserName(String username);

}
