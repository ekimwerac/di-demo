import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { LoggerService } from './services/logger.service';
import { CustomLoggerService } from './services/custom-logger.service';



@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule],
  providers: [{ provide: LoggerService, useClass: CustomLoggerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
