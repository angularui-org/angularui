import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, Home, Github, Twitter, Sun } from 'lucide-angular';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), importProvidersFrom(LucideAngularModule.pick({Github, Twitter, Sun})), provideRouter(routes), provideClientHydration()]
};
