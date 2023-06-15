import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiskiModule } from './piski/piski.module';

@Module({
  imports: [PiskiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}