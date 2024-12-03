// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LoggerService } from './app/services/logger.service';
import { CustomLoggerService } from './app/services/custom-logger.service';

bootstrapApplication(AppComponent, {
  providers: [{ provide: LoggerService, useClass: CustomLoggerService }],
}).catch((err) => console.error(err));
