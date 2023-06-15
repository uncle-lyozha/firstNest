import { Module } from "@nestjs/common";
import { PiskiController } from "./piski.controller";
import { PiskiService } from "./piski.service";

@Module({
  controllers: [PiskiController],
  providers: [PiskiService]
})
export class PiskiModule {} 