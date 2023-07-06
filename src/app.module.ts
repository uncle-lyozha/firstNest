import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiskiModule } from './piski/piski.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PiskiModule, MongooseModule.forRoot('mongodb+srv://lyozhaadmin:N8FxOpLl6Vgzm7lK@clusterchillmaster.oscgqgk.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}