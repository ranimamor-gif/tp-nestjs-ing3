import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postVoy():string {
    return 'planifier un nouveau voyage ici';
  }
}
