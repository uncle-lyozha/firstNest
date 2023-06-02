import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSeeya(): string {
    return 'This comes from other path. See ya, looser!';
  }
}

