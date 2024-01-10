import { z } from 'zod';
import { isEnglishWord } from '../services/dictionary-service';

export const EnglishWordSchema = z.string().superRefine(
  async (word, ctx) => {
    try {
        await isEnglishWord(word);
        if (word.length !== 5) {
            ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "the word should contain 5 letters",
            });
        }
    } catch (error) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "The word must be an English word",
        });

      return false;
    }
  },
);