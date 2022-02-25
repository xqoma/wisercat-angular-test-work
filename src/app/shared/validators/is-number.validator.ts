import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

export function isNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value

    if (!value) {
      return null
    }

    const POSITIVE_NUMBER_REGEXP = new RegExp('^(\\d)*(\\.|\\,)?([0-9]*)?$')

    return !POSITIVE_NUMBER_REGEXP.test(value)
      ? {notAPositiveNumber: true}
      : null
  }
}
