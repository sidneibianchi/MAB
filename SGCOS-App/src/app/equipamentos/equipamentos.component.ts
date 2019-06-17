import { Component, OnInit } from '@angular/core';
import { Equipamento } from '../_models/Equipamento';
import { BsModalService } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EquipamentoService } from '../_services/Equipamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {

  titulo = 'Equipamentos';
  FiltroLista: string;
  equipamentoFiltrados: Equipamento[];
  equipamentos: Equipamento[];
  equipamento: Equipamento;
  idCliente: number;
  bodyDeletarEquipamento = '';
  modoSalvar = 'post';
  registerForm: FormGroup;
  returnedArray: Equipamento[];

  constructor(private equipamentoService: EquipamentoService,
              private modalService: BsModalService,
              private fb: FormBuilder,
              public router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
               }

  get filtroLista(): string {
    return this.FiltroLista;
  }

  set filtroLista(value: string) {
    this.FiltroLista = value;
    this.equipamentoFiltrados = this.filtroLista ? this.filtrarEquipamentos(this.filtroLista) : this.equipamentos;
  }

  filtrarEquipamentos(filtrarPor: string): Equipamento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.equipamentos.filter(
      equipamento => equipamento.nrSerie.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  novoEquipamento(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  openModal(template: any) {
    this.registerForm.reset();
    template.show();
  }

  ngOnInit() {
    this.idCliente = +this.route.snapshot.paramMap.get('idCliente');
    if (this.idCliente !== 0 ) {
      this.getEquipamentosPorCliente(this.idCliente);
    } else {
      this.getAllEquipamentos();
    }
    this.validation();

  }

  roleName() {
    return sessionStorage.getItem('role');
  }

  getEquipamentosPorCliente(idCliente: number) {
    this.equipamentoService.getEquipamentoByCliente(idCliente).subscribe(
      (Equipamentos: Equipamento[]) => {
        this.equipamentos = Equipamentos;
        this.equipamentoFiltrados = this.equipamentos;
        console.log(this.equipamentos);
      }, error => {
        console.log(error);
        this.toastr.error('Erro ao tentar carregar equipamentos: ${error}');
      });
  }

  getAllEquipamentos() {
    this.equipamentoService.getAllEquipamento().subscribe(
      (Equipamentos: Equipamento[]) => {
        this.equipamentos = Equipamentos;
        this.equipamentoFiltrados = this.equipamentos;
        console.log(this.equipamentos);
      }, error => {
        console.log(error);
        this.toastr.error('Erro ao tentar carregar equipamentos: ${error}');
      });
  }

  validation() {
    this.registerForm = this.fb.group({
      nrSerie: ['', Validators.required],
      descricao: [''],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      clienteId: []
    });
  }

  editarEquipamento(equipamento: Equipamento, template: any) {
    this.modoSalvar = 'put';
    this.openModal(template);
    this.equipamento = Object.assign({}, equipamento);
    console.log(equipamento);
    this.registerForm.patchValue(this.equipamento);
  }

  excluirEquipamento(equipamento: Equipamento, template: any) {
    this.openModal(template);
    this.equipamento = equipamento;
    this.bodyDeletarEquipamento = `Tem certeza que deseja excluir o equipamento: ${equipamento.nrSerie}`;
  }

  confirmeDelete(template: any) {
    const clienteId =  this.equipamento.clienteId;
    this.equipamentoService.deleteEquipamento(this.equipamento.id).subscribe(
      () => {
        template.hide();
        this.ngOnInit();
        /* this.getEquipamentosPorCliente(clienteId); */
        this.toastr.success('Equipamento excluido com sucesso!');
      }, error => {
        this.toastr.error('Erro ao tentar excluir equipamento: ${error}');
        console.log(error);
      }
    );
  }

  salvarEquipamento(template: any) {
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.equipamento = Object.assign({}, this.registerForm.value);
        this.equipamento.clienteId = this.idCliente;
        console.log(this.equipamento);
        this.equipamentoService.postEquipamento(this.equipamento).subscribe(
          (novoEquipamento: Equipamento) => {
            template.hide();
            this.getEquipamentosPorCliente(this.equipamento.clienteId);
            this.toastr.success('Equipamento inserido com sucesso!');
          }, error => {
            this.toastr.error('Erro ao incluir equipamento: ${error}');
          });
      } else {
        this.equipamento = Object.assign({ id: this.equipamento.id }, this.registerForm.value);
        console.log(this.equipamento);
        this.equipamentoService.putEquipamento(this.equipamento).subscribe(
          () => {
            template.hide();
            this.getEquipamentosPorCliente(this.equipamento.clienteId);
            this.toastr.success('Equipamento alterado com sucesso!');
          }, error => {
            console.log(error);
            this.toastr.error('Erro ao alterar equipamento: ${error}');
          });
      }
    }
  }

}
