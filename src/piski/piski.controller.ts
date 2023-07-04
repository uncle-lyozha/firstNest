import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { PiskiService } from './piski.service';

@Controller('piski')
export class PiskiController {
  constructor(private readonly piskiService: PiskiService) {}
  
  @Post()
  addPiski(
    @Body('title') piskiTitle: string,
    @Body('size') piskiSize: number,
    @Body('description') piskiDesc: string,
  ) {
    const generatedId = this.piskiService.insertPiski(piskiTitle, piskiSize, piskiDesc);
    return { id: generatedId}
  }

  @Get()
  getAllPiski() {
    return this.piskiService.getPiski();
  }

  @Get(':id') 
  getPiska(@Param('id') piskiID: string) {
    return this.piskiService.getSinglePiska(piskiID);
  }

  @Patch(':id')
  updatePiski(
    @Param('id') piskiID: string, 
    @Body('title') piskiTitle: string,
    @Body('size') piskiSize: number,
    @Body('description') piskiDesc: string,
  ) {
    this.piskiService.updatePiska(piskiID, piskiTitle, piskiSize, piskiDesc);
    return null;
  }

  @Delete(':id')
  removePiska(@Param('id') piskiID: string ) {
    this.piskiService.deletePiska(piskiID);
    return null;
  }
}