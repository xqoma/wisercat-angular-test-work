import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-hiring-page',
  templateUrl: './hiring-page.component.html',
  styleUrls: ['./hiring-page.component.scss'],
})
export class HiringPageComponent implements OnInit {
  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      workExpMonths: ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log('Form is valid:', this.form.valid)
    console.log(this.form.value)
    // Here is a submit logic
  }

  onReset(): void {
    this.resetForm()
    // Show message method
  }

  resetForm(): void {
    this.form.reset()
  }
}
