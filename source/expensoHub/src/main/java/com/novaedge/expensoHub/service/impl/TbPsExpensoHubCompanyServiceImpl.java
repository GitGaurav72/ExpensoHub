package com.novaedge.expensoHub.service.impl;

import com.novaedge.expensoHub.dao.TbPsExpensoHubCompanyDao;
import com.novaedge.expensoHub.entity.TbPsExpensoHubCompany;
import com.novaedge.expensoHub.service.TbPsExpensoHubCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TbPsExpensoHubCompanyServiceImpl implements TbPsExpensoHubCompanyService {

    @Autowired
    private TbPsExpensoHubCompanyDao companyDao;

    @Override
    public TbPsExpensoHubCompany registerCompany(TbPsExpensoHubCompany company) {
        company.setCreatedDate(LocalDateTime.now());
        company.setUpdatedDate(LocalDateTime.now());
        company.setStatus("ACTIVE");
        return companyDao.save(company);
    }

    @Override
    public Optional<TbPsExpensoHubCompany> loginCompany(String email, String registrationNumber) {
        Optional<TbPsExpensoHubCompany> company = companyDao.findByEmail(email);
        if (company.isPresent() && company.get().getRegistrationNumber().equals(registrationNumber)) {
            return company;
        }
        return Optional.empty();
    }

    @Override
    public Optional<TbPsExpensoHubCompany> getCompanyById(Long companyId) {
        return companyDao.findById(companyId);
    }

    @Override
    public List<TbPsExpensoHubCompany> getAllCompanies() {
        return companyDao.findAll();
    }

    @Override
    public boolean existsByEmail(String email) {
        return companyDao.existsByEmail(email);
    }

    @Override
    public boolean existsByRegistrationNumber(String registrationNumber) {
        return companyDao.existsByRegistrationNumber(registrationNumber);
    }
}