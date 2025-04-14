import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-add-claim',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule
  
  ],
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})

export class AddClaimComponent {
  claimForm: FormGroup;
  claimTypes = ['Travel', 'Office Supplies', 'Training', 'Meals', 'Equipment', 'Others'];
  claimMode: 'single' | 'monthly' = 'single';
  selectedDate: Date | null = null;
  submittedDates: Date[] = [];
  dateFilter = (date: Date): boolean => {
    return true;
  };
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.initializeForm();
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      this.selectedFiles = Array.from(files);
      this.claimForm.patchValue({
        receipts: this.selectedFiles.map(f => f.name).join(', ')
      });
    }
  }

  initializeForm() {
    this.claimForm = this.fb.group({
      type: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      receipts: [''],
      additionalNotes: ['']
    });
  }

  onModeChange(mode: 'single' | 'monthly') {
    this.claimMode = mode;
    this.selectedDate = null;
    this.initializeForm();
  }

  onDateSelect(date: Date | null): void {
    if (date) {
      this.selectedDate = date;
    }
  }

  isDateSubmitted(date: Date): boolean {
    return this.submittedDates.some(d => 
      d.getDate() === date.getDate() && 
      d.getMonth() === date.getMonth() && 
      d.getFullYear() === date.getFullYear()
    );
  }

  submittedClaims: any[] = [];

  onSubmit() {
    if (this.claimForm.valid && this.selectedDate) {
      const claim = {
        type: this.claimForm.get('type')?.value,
        amount: this.claimForm.get('amount')?.value,
        description: this.claimForm.get('description')?.value,
        date: this.selectedDate,
        additionalNotes: this.claimForm.get('additionalNotes')?.value,
        files: this.selectedFiles.map(f => f.name)
      };

      this.submittedClaims.push(claim);
      this.submittedClaims.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.submittedDates.push(this.selectedDate);
      
      // Show success message
      this.snackBar.open('Claim submitted successfully!', 'Close', {
        duration: 3000
      });

      // Reset form but stay on page
      this.claimForm.reset();
      this.selectedFiles = [];
      this.selectedDate = null;
    }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

  getFileNames(){
    return this.selectedFiles.map(f => f.name).join(', ');
  }
}
