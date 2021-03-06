import {Component, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import {TranslateService} from '@ngx-translate/core'

import {MessageAlertInterface} from 'src/app/shared/types/message-alert.interface'
import {isPositiveNumberValidator} from 'src/app/shared/validators/is-positive-number.validator'
import {positiveDecimalLengthValidator} from 'src/app/shared/validators/positive-decimal-length.validator'

const FORM_UPDATE_ON = 'blur'
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

  constructor(private fb: FormBuilder, private translate: TranslateService) {
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
      {updateOn: FORM_UPDATE_ON}
    )
  }

  isInputErrorMsg(control: AbstractControl | null): boolean | null {
    if (!control) return null

    return control.invalid && control.touched
  }

  getInputErrorMsg(control: AbstractControl | null): string | null {
    if (!control) return null

    const errors: ValidationErrors | null = control.errors

    if (!errors) return null

    const errorMsg = this.getInputErrorString(errors)

    return errorMsg
  }

  private getInputErrorString(errors: ValidationErrors): string {
    let errorString = ''

    Object.keys(errors).forEach((keyErr) => {
      let count: number | undefined
      if (keyErr === 'invalidDecimalLength') {
        count = WORK_EXP_DIGITS_AFTER_COMMA
      }

      this.translate
        .stream(`shared.errors.${keyErr}`, {count: count})
        .subscribe((text) => {
          errorString += text + ' '
        })
    })

    return errorString
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
      this.translate
        .stream('shared.successes.formSubmitted')
        .subscribe((text) => {
          this.showMessageAlert(text, 'success')
        })
    } else {
      this.form.markAllAsTouched()
      // prettier-ignore
      this.translate
        .stream('shared.errors.invalidForm')
        .subscribe((text) => {
          this.showMessageAlert(text, 'error')
        })
    }
  }

  onReset(): void {
    this.form.reset()
    // prettier-ignore
    this.translate
      .stream('shared.infos.formCleared')
      .subscribe((text) => {
        this.showMessageAlert(text)
      })
  }
}
