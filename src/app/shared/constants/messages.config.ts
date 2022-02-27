interface MessageStore {
  errors: Record<string, string>
  infos: Record<string, string>
  successes: Record<string, string>
}

export const MESSAGES: MessageStore = {
  errors: {
    required: 'This field is required.',
    email: 'Invalid email format.',
    notAPositiveNumber: 'The value must be a positive number.',
    invalidDecimalLength: 'Max digits after comma: ',
    invalidForm: 'The form is invalid',
    unknownError: 'Unknown error: ',
  },
  infos: {
    formCleared: 'The form was cleared.',
  },
  successes: {
    formSubmitted: 'The form was submitted successfully!',
  },
}
