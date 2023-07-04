import { Injectable, NotFoundException} from "@nestjs/common";
import { Piski } from "./piski.model"

@Injectable()
export class PiskiService {
  private piski: Piski[] = [];

  insertPiski(title: string, size: number, description: string) {
    const piskiID = Math.random().toString();
    const newPiska = new Piski(piskiID, title, size, description);
    this.piski.push(newPiska);
    return piskiID;
  }

  getPiski() {
    return [...this.piski];
  }

  getSinglePiska(piskiID: string) {
    const piska = this.findPiska(piskiID)[0];
    return { ... piska };
  }

  updatePiska(piskiID: string, title: string, size: number, description: string) {
    const [piska, index] = this.findPiska(piskiID);
    const updPiska = {...piska};
    if (title) {
      updPiska.title = title;
    }
    if (size) {
      updPiska.size = size;
    }
    if (description) {
      updPiska.description = description;
    }
    this.piski[index] = updPiska;
  }

  deletePiska(piskiID: string) {
    const index = this.findPiska(piskiID)[1];
    this.piski.splice(index, 1);    
  }

  private findPiska(id: string): [Piski, number] {
    const piskaIndex = this.piski.findIndex(pis => pis.id === id);
    const piska = this.piski[piskaIndex];
    if (!piska) {
      throw new NotFoundException('Could not found piska.');
    }
    return [piska, piskaIndex];
  }
}