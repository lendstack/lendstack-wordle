import { z } from 'zod';
import { isEnglishWord } from '../services/dictionary-service';

export const EnglishWordSchema = z.string().superRefine(
  async (word, ctx) => {
    try {
        const isValid = await isEnglishWord(word);
        if (!isValid)
        {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "The word must be an English word",
            });
        }
        else if (word.length !== 5) {
            ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "the word should contain 5 letters",
            });
        }
        return isValid;
    } catch (error) {
      return false;
    }
  },
);