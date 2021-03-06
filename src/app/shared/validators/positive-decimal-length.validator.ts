import {ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms'

const POSITIVE_FLOAT_NUMBER_REGEXP = new RegExp('^(\\d)*(\\.|\\,)([0-9]*)?$')

export function positiveDecimalLengthValidator(
  digitsAfterComma: number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value

    if (!value) return null

    // To show error only for positive float number
    if (!POSITIVE_FLOAT_NUMBER_REGEXP.test(value)) {
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
