import { Injectable, NotFoundException} from "@nestjs/common";
import { Piski } from "./piski.model"

@Injectable()
export class PiskiService {
  piski: Piski[] = [];

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
    const piska = this.piski.find(pis => pis.id === piskiID);
    if (!piska) {
      throw new NotFoundException('Could not found piska.');
    }
    return { ... piska };
  }
}