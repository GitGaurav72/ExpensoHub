package com.novaedge.expensoHub.dao;

import com.novaedge.expensoHub.entity.TbPsExpensoHubCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface TbPsExpensoHubCompanyDao extends JpaRepository<TbPsExpensoHubCompany, Long> {
    
    Optional<TbPsExpensoHubCompany> findByCompanyName(String companyName);
    
    Optional<TbPsExpensoHubCompany> findByRegistrationNumber(String registrationNumber);
    
    Optional<TbPsExpensoHubCompany> findByEmail(String email);
    
    List<TbPsExpensoHubCompany> findByStatus(String status);
    
    boolean existsByRegistrationNumber(String registrationNumber);
    
    boolean existsByEmail(String email);
    
    List<TbPsExpensoHubCompany> findByCompanyNameContainingIgnoreCase(String companyName);
}