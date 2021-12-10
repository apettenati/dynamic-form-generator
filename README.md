# Dynamic Form Generator

## [Live Link](https://apettenati.github.io/dynamic-form-generator/)

## Application details

This application was built with TypeScript and React. No additional dependencies were added.

## Components

- The main component is `Form`, which returns the generated Form and displays the Results.
- Component `Results` shows the data in a user friendly format from the form submission.
- Component `FormField` creates each field in the form.

## Notes

- Assumes all element types are 'input' for this take home. Would need to accommodate other types of HTML tags.
- Does not validate that the 'type' of the input field is valid (i.e. phone number is not the best type).
- Would need to add more robust typing for other types of input fields who's state cannot be referenced from `target.value`.
- Does not verify that form names are unique which could cause a conditional check clash.
- Would need to verify the type expected in the conditional function and cast the state accordingly.

## Available Scripts

In the project directory, you can run:

- `yarn start` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn build` Builds the app for production to the `build` folder.\
- `yarn deploy` Deploys the application to GitHub pages.
