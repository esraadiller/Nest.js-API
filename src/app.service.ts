import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey';
  }
}

//HTTP GET / --> controller --> service