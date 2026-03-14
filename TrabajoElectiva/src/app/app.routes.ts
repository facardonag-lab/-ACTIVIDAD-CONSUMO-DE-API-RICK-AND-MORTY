import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./componets/rick-list/rick-list').then(m => m.RickList)
    }
];
