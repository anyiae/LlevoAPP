import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },

  {
    path: 'coversor',
    loadChildren: () => import('./pages/coversor/coversor.module').then(m => m.CoversorPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },

  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.module').then(m => m.ClimaPageModule)
  },

  {
    path: 'viajar',
    loadChildren: () => import('./pages/viajar/viajar.module').then(m => m.ViajarPageModule)
  },
  
  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then(m => m.PruebaPageModule)
  },
  
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'modificar-u',
    loadChildren: () => import('./pages/modificar-u/modificar-u.module').then(m => m.ModificarUPageModule)
  },
  
  {
    path: 'destino',
    loadChildren: () => import('./pages/destino/destino.module').then(m => m.DestinoPageModule)
  },  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'pasajeros',
    loadChildren: () => import('./pages/pasajeros/pasajeros.module').then( m => m.PasajerosPageModule)
  },
  {
    path: 'conductores',
    loadChildren: () => import('./pages/conductores/conductores.module').then( m => m.ConductoresPageModule)
  },
  {
    path: 'login-chofer',
    loadChildren: () => import('./pages/login-chofer/login-chofer.module').then( m => m.LoginChoferPageModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('./pages/menu2/menu2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'registrochofer',
    loadChildren: () => import('./pages/registrochofer/registrochofer.module').then( m => m.RegistrochoferPageModule)
  },
  {
    path: 'modificar-c',
    loadChildren: () => import('./pages/modificar-c/modificar-c.module').then( m => m.ModificarCPageModule)
  },



 





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
