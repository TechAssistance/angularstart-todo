import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// test update for git lol - okay think this should fix the commit info lol
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
