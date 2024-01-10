import { Injectable } from '@nestjs/common';

const wordBank = [
  'ninja',
  'spade',
  'pools',
  'drive',
  'relax',
  'times',
  'train',
  'cores',
  'pours',
  'blame',
  'banks',
  'phone',
  'bling',
  'coins',
  'hello',
];

@Injectable()
export class WordsService {
  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    return wordBank[randomIndex];
  }
}
