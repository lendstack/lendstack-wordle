import {faker} from "@faker-js/faker"
export function generateRandomWord(length: number): string{
    return faker.word.noun(length);
}
