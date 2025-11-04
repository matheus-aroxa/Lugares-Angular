import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing-module';
import { Categoria } from './categoria/categoria';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    Categoria
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoriasModule {

}
