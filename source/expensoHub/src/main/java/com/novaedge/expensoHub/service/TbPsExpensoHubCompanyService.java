package com.novaedge.expensoHub.service;

import com.novaedge.expensoHub.entity.TbPsExpensoHubCompany;
import java.util.Optional;
import java.util.List;

public interface TbPsExpensoHubCompanyService {
    TbPsExpensoHubCompany registerCompany(TbPsExpensoHubCompany company);
    Optional<TbPsExpensoHubCompany> loginCompany(String email, String registrationNumber);
    Optional<TbPsExpensoHubCompany> getCompanyById(Long companyId);
    List<TbPsExpensoHubCompany> getAllCompanies();
    boolean existsByEmail(String email);
    boolean existsByRegistrationNumber(String registrationNumber);
}