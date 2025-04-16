package com.novaedge.expensoHub.controller;

import com.novaedge.expensoHub.entity.TbPsExpensoHubCompany;
import com.novaedge.expensoHub.service.TbPsExpensoHubCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/company")
@CrossOrigin(origins = "*")
public class TbPsExpensoHubCompanyController {

    @Autowired
    private TbPsExpensoHubCompanyService companyService;

    @PostMapping("/register")
    public ResponseEntity<?> registerCompany(@RequestBody TbPsExpensoHubCompany company) {
        try {
            if (companyService.existsByEmail(company.getEmail())) {
                return ResponseEntity.badRequest()
                    .body("Company with this email already exists");
            }

            if (companyService.existsByRegistrationNumber(company.getRegistrationNumber())) {
                return ResponseEntity.badRequest()
                    .body("Company with this registration number already exists");
            }

            TbPsExpensoHubCompany savedCompany = companyService.registerCompany(company);
            return ResponseEntity.ok(savedCompany);
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                .body("Error registering company: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCompany(@RequestBody Map<String, String> loginRequest) {
        try {
            String email = loginRequest.get("email");
            String registrationNumber = loginRequest.get("registrationNumber");

            if (email == null || registrationNumber == null) {
                return ResponseEntity.badRequest()
                    .body("Email and registration number are required");
            }

            Optional<TbPsExpensoHubCompany> company = companyService.loginCompany(email, registrationNumber);

            if (company.isPresent()) {
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful");
                response.put("companyDetails", company.get());
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.badRequest()
                    .body("Invalid credentials");
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                .body("Error during login: " + e.getMessage());
        }
    }

    @GetMapping("/{companyId}")
    public ResponseEntity<?> getCompanyById(@PathVariable Long companyId) {
        try {
            return companyService.getCompanyById(companyId)
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                .body("Error fetching company: " + e.getMessage());
        }
    }
}