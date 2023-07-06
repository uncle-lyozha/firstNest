import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { PiskiService } from './piski.service';

@Controller('piski')
export class PiskiController {
  constructor(private readonly piskiService: PiskiService) {}
  
  @Post()
  async addPiski(
    @Body('title') piskiTitle: string,
    @Body('size') piskiSize: number,
    @Body('description') piskiDesc: string,
  ) {
    const generatedId = await this.piskiService.insertPiski(piskiTitle, piskiSize, piskiDesc);
    return { id: generatedId}
  }

  @Get()
  async getAllPiski() {
    const piski = await this.piskiService.getPiski();
    return piski.map(pis => ({
      id: pis.id, 
      title: pis.title, 
      size: pis.size, 
      description: pis.description
    }));
  }

  @Get(':id') 
  getPiska(@Param('id') piskiID: string) {
    return this.piskiService.getSinglePiska(piskiID);
  }

  @Patch(':id')
  async updatePiski(
    @Param('id') piskiID: string, 
    @Body('title') piskiTitle: string,
    @Body('size') piskiSize: number,
    @Body('description') piskiDesc: string,
  ) {
    await this.piskiService.updatePiska(piskiID, piskiTitle, piskiSize, piskiDesc);
    return null;
  }

  @Delete(':id')
  async removePiska(@Param('id') piskiID: string ) {
    await this.piskiService.deletePiska(piskiID);
    return null;
  }
}