import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('strings')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/seeya')
  getSeeya(): string {
    return this.appService.getSeeya();
  }
}
