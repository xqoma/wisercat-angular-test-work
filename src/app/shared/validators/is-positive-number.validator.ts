import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

const POSITIVE_NUMBER_REGEXP = new RegExp('^(\\d)*(\\.|\\,)?([0-9]*)?$')

export function isPositiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value

    if (!value) return null

    return !POSITIVE_NUMBER_REGEXP.test(value)
      ? {notAPositiveNumber: true}
      : null
  }
}
