import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

export function isNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value

    if (!value) {
      return null
    }

    return isNaN(Number(value)) ? {isNumber: true} : null
  }
}
