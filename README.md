# JSON Transformation Test

## Exercise Process
The exercise must be done via screen sharing.
You must use the online editor [vscode.dev](https://vscode.dev) to edit the code.

The script execution is done on the user's terminal.

## Goal
The goal of this test is to transform the input JSON file (`in.json`) into the expected output format (`expected-out.json`).

## Instructions

1. **Input Validation**
   Update the `inputSchema` schema to validate the input data format.

2. **Transformation**
   Update the `transform` function to convert the validated input into the expected output.

3. **Run**
   Run the script using the following command:
   ```bash
   npm start
   ```
   The result will be written to `out.json`.
4. **Validate**
   Run the test tool to validate the output with this command:
   ```bash
   npm test
   ```

## Optional
If you have time, you can use the [ApiCountries API](https://www.apicountries.com/docs) to retrieve the country code dynamically instead of using the provided `countryCodes` object.
