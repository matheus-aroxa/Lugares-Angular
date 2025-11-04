import { Component } from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class Categoria {
  camposForm: FormGroup;

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      console.log("Valores digitados: " + this.camposForm.value);
    }
  }

  isCampoInvalid(nome: string): boolean {
    const campo = this.camposForm.get(nome);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
