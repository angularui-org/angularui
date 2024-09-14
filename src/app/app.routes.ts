import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { AlertComponent } from './pages/docs/alert/alert.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'docs',
        component: DocsComponent,
        children: [
            {
                path: 'alert',
                component: AlertComponent,
            }
        ]
    }
];
