import {Component, OnInit, ViewChildren} from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms'

import {MESSAGES} from 'src/app/shared/constants/messages.config'
import {MessageAlertInterface} from 'src/app/shared/types/message-alert.interface'
import {isPositiveNumberValidator} from 'src/app/shared/validators/is-positive-number.validator'
import {positiveDecimalLengthValidator} from 'src/app/shared/validators/positive-decimal-length.validator'

const WORK_EXP_DIGITS_AFTER_COMMA: number = 1
const DEFAULT_MESSAGE_ALERT_TYPE = 'info'

@Component({
  selector: 'app-hiring-page',
  templateUrl: './hiring-page.component.html',
  styleUrls: ['./hiring-page.component.scss'],
})
export class HiringPageComponent implements OnInit {
  form!: FormGroup

  messageAlert: MessageAlertInterface

  constructor(private fb: FormBuilder) {
    this.messageAlert = {
      text: '',
      type: DEFAULT_MESSAGE_ALERT_TYPE,
      showned: false,
    }
  }

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
      if (keyErr in MESSAGES.errors) {
        errorMsg += MESSAGES.errors[keyErr] + ' '
      } else {
        errorMsg += MESSAGES.errors['unknownError'] + keyErr
      }
    })
    return errorMsg
  }

  private showMessageAlert(text: string, type?: string): void {
    this.messageAlert.text = text
    if (type) {
      this.messageAlert.type = type
    } else {
      this.messageAlert.type = DEFAULT_MESSAGE_ALERT_TYPE
    }
    this.messageAlert.showned = true
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.showMessageAlert(MESSAGES.successes['formSubmitted'], 'success')
    } else {
      this.showMessageAlert(MESSAGES.errors['invalidForm'], 'error')
    }
  }

  onReset(): void {
    this.form.reset()
    this.showMessageAlert(MESSAGES.infos['formCleared'])
  }
}
