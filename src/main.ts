import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './app/data/formData.service';
import { WorkflowService } from './app/workflow/workflow.service';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(/* other providers */
      BrowserModule, 
                    FormsModule,
                
    ),
     provideZonelessChangeDetection(),
         { provide: FormDataService, useClass: FormDataService },
                                       { provide: WorkflowService, useClass: WorkflowService }
  ],
}).catch(err => console.error(err));