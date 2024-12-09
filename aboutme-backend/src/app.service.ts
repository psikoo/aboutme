import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): JSON {
    return JSON.parse('{"status": "✅ The api is running"}');
  }
}
