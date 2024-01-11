import { z } from 'zod';
import { isEnglishWord } from '../services/dictionary.service';

export const EnglishWordSchema = z.string().superRefine(
  async (word, ctx) => {
    try {
      if (!/^[a-zA-Z]{5}$/.test(word))
      {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Not a 5 letters word",
        });
        return false;
      }
      const isValid = await isEnglishWord(word);
      if (!isValid)
      {
        ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Not an English word",
        });
      }
      return isValid;
    } catch (error) {
      return false;
    }
  },
);