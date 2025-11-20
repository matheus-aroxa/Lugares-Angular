import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {CategoriaService} from '../../categorias/categoria-service';
import {Categoria} from '../../categorias/categoria';
import {LugaresService} from '../lugares-service';

@Component({
  selector: 'app-lugares',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss',
})
export class Lugar implements OnInit {
  formGroup;
  categorias?: Categoria[];
  loadingCategorias = true;

  constructor(private fb: FormBuilder, private categoriasService: CategoriaService, private lugarService: LugaresService) {
    this.formGroup = fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      localizacao: ['', Validators.required],
      urlFoto: ['', Validators.required],
      avaliacao: ['', [Validators.required, Validators.min(0), Validators.max(10), Validators.max(5)]],
    })

  }

  ngOnInit(): void {
    this.categoriasService.findAll().subscribe({
      next: (response) => {
        this.categorias = response;
        this.loadingCategorias = false;
      },
      error: (err) => {
        this.categorias = [];
        console.error(err);
      }
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();

    if(this.formGroup.valid){
      this.lugarService.salvar(this.formGroup.value);
    }
  }

  isCampoInvalid(nome: string): boolean {
    const campo = this.formGroup.get(nome);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
