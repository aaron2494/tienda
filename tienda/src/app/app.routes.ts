import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./products/features/products-shell/product.route')
    },
    {
        path: '**',
        redirectTo: ''
    },
];
