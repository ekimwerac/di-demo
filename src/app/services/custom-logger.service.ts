import { Injectable } from '@angular/core';

@Injectable()
export class CustomLoggerService {
  log(message: string): void {
    console.log(`CustomLoggerService: ${message}`);
  }
}
