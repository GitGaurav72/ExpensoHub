import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

export type DepartmentType = 'HR' | 'Development' | 'Management' | 'Support';
@Component({
  selector: 'app-add-employee-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss']
})
// Update the designations type and access method


export class AddEmployeeDialogComponent {
  departments: DepartmentType[] = ['HR', 'Development', 'Management', 'Support'];
  designations: Record<DepartmentType, string[]> = {
    'HR': ['HR Manager', 'HR Executive'],
    'Development': ['Senior Developer', 'Full Stack Developer'],
    'Management': ['Project Manager', 'Team Lead'],
    'Support': ['Customer Care Executive', 'Support Specialist']
  };
  employeeForm  : any ;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeDialogComponent>
  ) {
    this.employeeForm = this.fb.group({
      emp_id: ['', Validators.required],
      emp_Firtnm: ['', Validators.required],
      emp_Lstnm: ['', Validators.required],
      emp_mail: ['', [Validators.required, Validators.email]],
      emp_compId: ['', Validators.required],
      emp_dept: ['', Validators.required],
      emp_design: ['', Validators.required],
      emp_PhNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emp_joinDt: ['', Validators.required],
      emp_address: ['', Validators.required]
    });
  }


  getDesignations(): string[] {
    const dept = this.employeeForm.get('emp_dept')?.value as DepartmentType;
    return dept ? this.designations[dept] : [];
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}


