import { Module } from "@nestjs/common";
import { PiskiController } from "./piski.controller";
import { PiskiService } from "./piski.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PiskiSchema } from "./piski.model";

@Module({
  imports: [MongooseModule.forFeature([{name: 'Piski', schema: PiskiSchema}])],
  controllers: [PiskiController],
  providers: [PiskiService]
})
export class PiskiModule {} 