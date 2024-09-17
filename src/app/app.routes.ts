import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { AlertComponent } from './pages/docs/alert/alert.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

export const routes: Routes = [
    {
        path: '',
        component: ComingSoonComponent,
        pathMatch: 'full'
    }
];
