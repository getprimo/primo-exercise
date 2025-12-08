import * as fs from 'fs';
import axios from 'axios';
import { z } from 'zod';

// You can alternatively use: https://www.apicountries.com/, documentation here https://www.apicountries.com/docs
// axios is already installed in the project but you can use any other library
const countryCodes: Record<string, string> = {
  france: 'FR',
  spain: 'ES',
  italy: 'IT',
  germany: 'DE',
};

const languageLevels: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Fluent: 4,
  Native: 5,
};

/**
 * @here - Update this schema, or use your prefered schema validator
 */
const inputSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  // TODO: add the rest of the schema here
});

/**
 * @here - Update the transform function to transform the input to the expected output
 */
const transform = async (rawInput: unknown): Promise<any> => {
  const output = {
    // TODO: make the output object here
  };

  return output;
};

/**
 * Nothing needs to be changed here
 */
(async () => {
  try {
    const inStr = await fs.promises.readFile('./in.json', 'utf-8');
    const jsonIn = JSON.parse(inStr);
    const output = await transform(jsonIn);
    const outStr = JSON.stringify(output, null, 2);
    await fs.promises.writeFile('./out.json', outStr);
  } catch (error) {
    console.error(error);
  }
})();
