### **Angular Dependency Injection Demo**

#### **Directory Structure**
```
src/app/
    app.component.ts
    components/
        example/
            example.component.ts
            example.component.html
            example.component.css
    services/
        logger.service.ts
        custom-logger.service.ts
```

---

### **Step 1: Setting Up the Project**

1. **Create a new Angular project**:
   ```bash
   npx -p @angular/cli@17.3.4 ng new di-demo
   cd di-demo
   mkdir src/app/components
   mkdir src/app/services
   ```

---

### **Step 2: Create a Logger Service**

1. **Generate the Logger service**:
   ```bash
   npx -p @angular/cli@17.3.4 ng generate service services/logger
   ```

2. **Update `LoggerService` (in `src/app/services/logger.service.ts`)**:
   ```typescript
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root', // The service is globally available
   })
   export class LoggerService {
     log(message: string): void {
       console.log(`LoggerService: ${message}`);
     }
   }
   ```

---

### **Step 3: Create a Standalone Example Component**

1. **Generate the Example component**:
   ```bash
   npx -p @angular/cli@17.3.4 ng generate component components/example --standalone
   ```

2. **Update `ExampleComponent` (in `src/app/components/example/example.component.ts`)**:
   ```typescript
   import { Component } from '@angular/core';
   import { LoggerService } from '../../services/logger.service';

   @Component({
     selector: 'app-example',
     templateUrl: './example.component.html',
     styleUrls: ['./example.component.css'],
     standalone: true,
   })
   export class ExampleComponent {
     constructor(private logger: LoggerService) {
       this.logger.log('ExampleComponent initialized.');
     }
   }
   ```

3. **Update the ExampleComponent template**:
   ```html
   <p>Example component works! Check the console for logs.</p>
   ```

---

### **Step 4: Use the Example Component in AppComponent**

1. **Update `AppComponent` (in `src/app/app.component.ts`)**:
   ```typescript
   import { Component } from '@angular/core';
   import { ExampleComponent } from './components/example/example.component';

   @Component({
     selector: 'app-root',
     template: `
       <h1>Angular Dependency Injection Demo</h1>
       <app-example></app-example>
     `,
     standalone: true,
     imports: [ExampleComponent],
   })
   export class AppComponent {}
   ```

2. **Update `src/main.ts`**:
   ```typescript
   import { bootstrapApplication } from '@angular/platform-browser';
   import { AppComponent } from './app/app.component';

   bootstrapApplication(AppComponent).catch((err) => console.error(err));
   ```

---

### **Step 5: Add and Override with Custom Logger**

1. **Generate a Custom Logger service**:
   ```bash
   npx -p @angular/cli@17.3.4 ng generate service services/custom-logger
   ```

2. **Update `CustomLoggerService` (in `src/app/services/custom-logger.service.ts`)**:
   ```typescript
   import { Injectable } from '@angular/core';

   @Injectable()
   export class CustomLoggerService {
     log(message: string): void {
       console.log(`CustomLoggerService: ${message}`);
     }
   }
   ```

3. **Override `LoggerService` with `CustomLoggerService` in `main.ts`**:
   ```typescript
   import { bootstrapApplication } from '@angular/platform-browser';
   import { AppComponent } from './app/app.component';
   import { LoggerService } from './app/services/logger.service';
   import { CustomLoggerService } from './app/services/custom-logger.service';

   bootstrapApplication(AppComponent, {
     providers: [{ provide: LoggerService, useClass: CustomLoggerService }],
   }).catch((err) => console.error(err));
   ```

---

### **Step 6: Add a Static Value Provider**

1. **Update `main.ts` to add a static value**:
   ```typescript
   bootstrapApplication(AppComponent, {
     providers: [
       { provide: 'API_URL', useValue: 'https://api.example.com' },
     ],
   }).catch((err) => console.error(err));
   ```

2. **Use the value in `ExampleComponent`**:
   ```typescript
   import { Component, Inject } from '@angular/core';

   @Component({
     selector: 'app-example',
     templateUrl: './example.component.html',
     styleUrls: ['./example.component.css'],
     standalone: true,
   })
   export class ExampleComponent {
     constructor(
       private logger: LoggerService,
       @Inject('API_URL') public apiUrl: string
     ) {
       this.logger.log(`API URL: ${this.apiUrl}`);
     }
   }
   ```

---

### **Ensuring the Instructions Avoid Problems**

1. **No Direct Injection of `CustomLoggerService`**:
   - `CustomLoggerService` is used only as a replacement for `LoggerService`.
   - It is **not injected directly** into any components, ensuring that the `main.ts` override has the intended effect.

2. **Proper Provider Configuration**:
   - The `providers` in `main.ts` explicitly replaces `LoggerService` with `CustomLoggerService`, ensuring the app behavior aligns with the demo's teaching objectives.

3. **Clear Instructions**:
   - The role of `LoggerService` and `CustomLoggerService` is explained, so the learner understands why and how to override dependencies.

---

### **Debugging Tips for Learners**

- **Logs**: Both `LoggerService` and `CustomLoggerService` include clear log statements, so you can verify which service is in use.
- **Breakpoints**: Use breakpoints or logs in service constructors to ensure Angular is injecting the correct instance.

---
