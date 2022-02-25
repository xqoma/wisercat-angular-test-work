import {ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms'

export function positiveDecimalLengthValidator(
  digitsAfterComma: number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value

    if (!value) {
      return null
    }

    const IS_A_FLOAT_NUMBER_REG_EXP = new RegExp('^(\\d)*(\\.|\\,)([0-9]*)?$')
    // To show error only for number
    if (!IS_A_FLOAT_NUMBER_REG_EXP.test(value)) {
      return null
    }

    // RegExp pattern matches with:
    // - "positive integer"
    // - "positive integer" + ("." or ",")
    // - "positive integer" + ("." or ",") + 0 to n count of "integer"
    const REGEXP = new RegExp(
      '^(\\d)*(\\.|\\,)?([0-9]{0,' + digitsAfterComma + '})?$'
    )

    return !REGEXP.test(value) ? {invalidDecimalLength: true} : null
  }
}
