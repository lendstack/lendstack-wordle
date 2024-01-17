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
  'coach',
  'coast',
  'coast',
  'colon',
  'comet',
  'comma',
  'condo',
  'conic',
  'corny',
  'could',
];

@Injectable()
export class WordsService {
  getWords(): string[] {
    return wordBank;
  }
}
