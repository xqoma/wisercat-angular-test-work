# Wisercat Angular Test Work

> Test work for [Wisercat](https://wisercat.eu/).

### Links

- [Live Demo](https://xqoma.github.io/wisercat-angular-test-work)
- [Project Kanban Bord](https://taiga.xqoma.com/project/wisercat-angular-test-work/kanban)
- [Notes](#notes)
- [Technical task from Wisercat](#technical-task-from-wisercat)

### Notes

- **Task decomposition.** I created a [kanban board](https://taiga.xqoma.com/project/wisercat-angular-test-work/kanban) for the project and decomposed the technical requirement into many tasks to simplify implementation.
- **LiveDemo** Also, I published a [demo](https://xqoma.github.io/wisercat-angular-test-work) of the project on Github Pages so that you can easily share and see how it works.
- **Project architecture.** I tried to make the project flexible, scalable and easily maintainable. Thus, showing his understanding of building the project architecture.
- **Git.** This repository contains all the branches and commits that I made, in order to show that I have experience with git. I didn't make a separate "develop" branch for feature implementation, because I thought it was overkill for such a project and I worked alone. It would not be so convenient.

### Technical task from [Wisercat](https://wisercat.eu/)

- Create a form using Angular reactive forms (any Angular version from 2-13 is OK).
- Form should have fields: Name, Surname, Email, Working experience in months (6; 12; 36; 23,5 etc.)
- All the fields are required and should have validation for that. Also, Email should have validation for e-mail. Working experience field should have custom Validators for checking that it’s a number and how many numbers allowed after comma (in this form this should be 1, but validator should be reusable so it should allow us to check for any number we want).
- If form input invalid, there should appear an error text under it.
- Under the form we have buttons Submit and Reset.
- When clicking on Submit button and form is not valid, there should appear message on top of the form informing user that form is not valid. If form is valid, there should appear success message. By clicking on Reset button all the inputs should be cleared. If some of the inputs has error under, this error should disappear. After form reset show info message telling the user that the form was cleared.
- Message should be implemented as reusable component which can take input properties:
  - Text – message text
  - Type – message type (according to this type, background of the message should take the right color). Types are: info, error, success. Default type is info.
  - Colors:
    - Success – background: #4caf50, text color: white;
    - Error – background: #e53935, text color: white;
    - Info – background: #2196f3, text-color: white;
- When first time visiting page with this from, there is no any messages on top of it. Invalid input error text should appear/disappear on blur (when input is not in focus anymore).
- When test work will be ready, upload your solution to some git repository and send us a link
