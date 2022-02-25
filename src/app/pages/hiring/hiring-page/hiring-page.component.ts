import {Component, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms'

import {ERROR_MESSAGES} from 'src/app/constants/error-messages.config'
import {isPositiveNumberValidator} from 'src/app/shared/validators/is-positive-number.validator'
import {positiveDecimalLengthValidator} from 'src/app/shared/validators/positive-decimal-length.validator'

const WORK_EXP_DIGITS_AFTER_COMMA: number = 1

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

  get name(): AbstractControl | null {
    return this.form.get('name')
  }

  get surname(): AbstractControl | null {
    return this.form.get('surname')
  }

  get email(): AbstractControl | null {
    return this.form.get('email')
  }

  get workExpMonths(): AbstractControl | null {
    return this.form.get('workExpMonths')
  }

  get workExpDigitsAfterComma(): number {
    return WORK_EXP_DIGITS_AFTER_COMMA
  }

  initializeForm(): void {
    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        workExpMonths: [
          '',
          [
            Validators.required,
            isPositiveNumberValidator(),
            positiveDecimalLengthValidator(WORK_EXP_DIGITS_AFTER_COMMA),
          ],
        ],
      },
      {updateOn: 'blur'}
    )
  }

  isErrorMsg(control: AbstractControl | null): boolean | null {
    if (!control) return null

    return control.invalid && control.touched
  }

  getErrorMsg(control: AbstractControl | null): string | null {
    if (!control) return null

    const errors: ValidationErrors | null = control.errors

    if (!errors) return null

    let errorMsg: string = ''
    Object.keys(errors).forEach((keyErr) => {
      if (keyErr in ERROR_MESSAGES) {
        errorMsg += ERROR_MESSAGES[keyErr] + ' '
      } else {
        errorMsg += 'Unknown error: ' + keyErr
      }
    })
    return errorMsg
  }

  resetForm(): void {
    this.form.reset()
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
}
