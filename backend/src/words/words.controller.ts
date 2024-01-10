import { Controller, Get } from '@nestjs/common';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}
  @Get('random')
  getRandomWord(): string {
    return this.wordsService.getRandomWord();
  }
}
