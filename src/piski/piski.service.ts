import { Injectable, NotFoundException} from "@nestjs/common";
import { Piski } from "./piski.model";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PiskiService {
  private piski: Piski[] = [];

  constructor(@InjectModel('Piski') private readonly piskiModel: Model<Piski>) {};

  async insertPiski(title: string, size: number, description: string) {
    const piskiID = Math.random().toString();
    const newPiska = new this.piskiModel({
      title: title, 
      size: size, 
      description: description
    });
    const result = await newPiska.save();
    console.log(result);
    return result.id as string;
  }

  async getPiski() {
    const piski = await this.piskiModel.find().exec();
    return piski as Piski[];
  }

  async getSinglePiska(piskiID: string) {
    const piska = await this.findPiska(piskiID);
    return {id: piska.id, title: piska.title, size: piska.size, description: piska.description};
  }

  async updatePiska(piskiID: string, title: string, size: number, description: string) {
    const updPiska = await this.findPiska(piskiID);
    if (title) {
      updPiska.title = title;
    }
    if (size) {
      updPiska.size = size;
    }
    if (description) {
      updPiska.description = description;
    }
    updPiska.save();
  }

  async deletePiska(piskiID: string) { 
    const result = await this.piskiModel.deleteOne({_id: piskiID}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not found piska.'); 
    }
  }

  private async findPiska(id: string): Promise<Piski> {
    let piska;
    try {
      piska = await this.piskiModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not found piska.');
    }
    if (!piska) {
      throw new NotFoundException('Could not found piska.');
    }
    return piska;
  }
}