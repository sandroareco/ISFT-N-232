import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/component/layout/layout.component'),
    },
    {
        path: 'ingreso',
        loadComponent: () => import('./features/ingreso/ingreso.component')
    },
    {
        path: 'alumnos',
        loadComponent: () => import('./features/alumnos/alumnos.component')
    },
    {
        path: 'desarrollo-de-software',
        loadComponent: () => import('./features/tecnicaturas/desarrollo-de-software/desarrollo-de-software.component')
    },
    {
        path: 'seguridad-e-higiene',
        loadComponent: () => import('./features/tecnicaturas/seguridad-e-higiene/seguridad-e-higiene.component')
    },
    {
        path: 'diseño-productos-mecanicos',
        loadComponent: () => import('./features/tecnicaturas/productos-mecanicos/productos-mecanicos.component')
    },
    {
        path: 'biblioteca',
        loadComponent: () => import('./features/biblioteca/biblioteca.component')
    },
    {
        path: 'noticias/primeros-graduados',
        loadComponent: () => import('./features/notice/notice-one/notice-one.component')
    },
    {
        path: 'noticias/unidad-integral',
        loadComponent: () => import('./features/notice/notice-two/notice-two.component')
    },
    {
        path: 'noticia/noticiaCooperadora',
        loadComponent: () => import('./shared/component/main/notice-main-one/notice-main-one.component')
    },
    {
        path: 'noticia/noticiaBiblioteca',
        loadComponent: () => import('./shared/component/main/notice-main-two/notice-main-two.component')
    },
    {
        path: 'noticia/noticiaCarreras',
        loadComponent: () => import('./shared/component/main/notice-main-three/notice-main-three.component')
    },
    {
        path: 'noticia/final-cursada-2023',
        loadComponent: () => import('./shared/component/main/notice-main-four/notice-main-four.component')
    },
    {
        path:'**',
        redirectTo:''
    }
];
