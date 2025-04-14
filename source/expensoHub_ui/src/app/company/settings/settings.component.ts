import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    NavbarComponent
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  reimbursementTypes = [
    'Travel',
    'Meals',
    'Office Supplies',
    'Training',
    'Medical',
    'Internet',
    'Phone',
    'Others'
  ];

  settingsForm;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      reimbursementRules: this.fb.array([]),
      approvalWorkflow: this.fb.group({
        requireManagerApproval: [true],
        requireHRApproval: [true],
        autoApprovalLimit: [1000]
      }),
      departments: this.fb.array([]),
      designations: this.fb.array([])
    });
  }

  ngOnInit() {
    this.addDefaultRules();
  }

  addDefaultRules() {
    this.addReimbursementRule();
    this.addDepartment();
    this.addDesignation();
  }

  addReimbursementRule() {
    const ruleGroup = this.fb.group({
      type: [''],
      maxAmount: [0],
      allowedDepartments: [[]],
      allowedDesignations: [[]],
      requiresReceipt: [true],
      description: [''],
      active: [true]
    });

    this.reimbursementRules.push(ruleGroup);
  }

  addDepartment() {
    const departmentGroup = this.fb.group({
      name: [''],
      budget: [0],
      active: [true]
    });

    this.departments.push(departmentGroup);
  }

  addDesignation() {
    const designationGroup = this.fb.group({
      title: [''],
      maxApprovalLimit: [0],
      active: [true]
    });

    this.designations.push(designationGroup);
  }

  get reimbursementRules() {
    return this.settingsForm.get('reimbursementRules') as FormArray;
  }

  get departments() {
    return this.settingsForm.get('departments') as FormArray;
  }

  get designations() {
    return this.settingsForm.get('designations') as FormArray;
  }

  saveSettings() {
    if (this.settingsForm.valid) {
      console.log('Settings saved:', this.settingsForm.value);
      // Implement save logic
    }
  }
}