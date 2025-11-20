import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CategoriaService} from '../../categorias/categoria-service';
import {LugaresService} from '../../lugares/lugares-service';
import {Lugar} from '../../lugares/lugar';
import {Categoria} from '../../categorias/categoria';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class GaleriaComponent implements OnInit {

  lugares$!: Observable<Lugar[]>;
  categorias$!: Observable<Categoria[]>;
  categoriaFiltro = "Todas as categorias";
  nomeFiltro = "";

  constructor(private categoriasService: CategoriaService, private lugaresService: LugaresService) {
  }

  ngOnInit() {
    this.lugares$ = this.lugaresService.findAll();
    this.categorias$ = this.categoriasService.findAll();
  }

  renderizaAvaliacao(avaliacao: number) {
    return "&#9733;".repeat(avaliacao) + "&#9734;".repeat(5 - avaliacao);
  }

  filtrar(){
    this.lugares$ = this.lugaresService.filtrar(this.nomeFiltro, this.categoriaFiltro);
  }
}
