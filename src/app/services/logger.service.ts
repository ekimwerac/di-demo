import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes the service globally available
})
export class LoggerService {
  log(message: string): void {
    console.log(`LoggerService: ${message}`);
  }
}
