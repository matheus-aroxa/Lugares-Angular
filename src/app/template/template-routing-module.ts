import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Layout} from './layout/layout';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias-module').then(m => m.CategoriasModule),
        data: { titulo: 'Categorias', subTitulo: 'Realize o cadastro de novas categorias' },
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares-module').then(m => m.LugaresModule),
        data: { titulo: 'Lugares', subTitulo: 'Realize o cadastro de lugares' },
      },
      {
        path: 'galeria',
        loadChildren: () => import('../galeria/galeria-module').then(m => m.GaleriaModule),
        data: { titulo: 'Lista de lugares legais', subTitulo: 'Descubra os melhores lugares' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
