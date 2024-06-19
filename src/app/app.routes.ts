import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/component/layout/layout.component'),
    },
    {
        path: 'ingreso',
        loadComponent: () => import('./business/ingreso/ingreso.component')
    },
    {
        path: 'alumnos',
        loadComponent: () => import('./business/alumnos/alumnos.component')
    },
    {
        path: 'desarrolloDeSoftware',
        loadComponent: () => import('./business/tecnicaturas/desarrollo-de-software/desarrollo-de-software.component')
    },
    {
        path: 'seguridadEHigiene',
        loadComponent: () => import('./business/tecnicaturas/seguridad-e-higiene/seguridad-e-higiene.component')
    },
    {
        path: 'diseñoProductosMecanicos',
        loadComponent: () => import('./business/tecnicaturas/productos-mecanicos/productos-mecanicos.component')
    },
    {
        path: 'biblioteca',
        loadComponent: () => import('./business/biblioteca/biblioteca.component')
    },
    {
        path: 'noticia/noticiaUno',
        loadComponent: () => import('./business/notice/notice-one/notice-one.component')
    },
    {
        path: 'noticia/noticiaDos',
        loadComponent: () => import('./business/notice/notice-two/notice-two.component')
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
        path: 'noticia/noticiaKiosco',
        loadComponent: () => import('./shared/component/main/notice-main-four/notice-main-four.component')
    },
    {
        path:'**',
        redirectTo:''
    }
];
