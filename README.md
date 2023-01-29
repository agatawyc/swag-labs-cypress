Few of the most common user paths are covered by automated tests, written using Page Object Pattern.
GitHub Actions are configured, so in every Pull Request, tests are automatically run.

## How to run tests:

1. Run `npm i`
1. Create a `cypress.env.json` file in root folder
1. Save to file this json with correct credentials
   ```
   {
   "login": "your_login",
   "password": "your_password"
   }
   ```
1. Run `npm run cypress:run`
