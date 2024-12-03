import { Component } from '@angular/core';
import { ExampleComponent } from './components/example/example.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Dependency Injection Demo</h1>
    <app-example></app-example>
  `,
  standalone: true,
  imports: [ExampleComponent]
})
export class AppComponent {}
