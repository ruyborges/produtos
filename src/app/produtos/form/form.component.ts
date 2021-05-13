import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formProduto: FormGroup;
  produtos: any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Produto());
  }

  createForm(produto: Produto) {
    this.formProduto = new FormGroup({
      nome: new FormControl(produto.nome),
      categoria: new FormControl(produto.categoria),
      quantidade: new FormControl(produto.quantidade)
    })
  }
  onSubmit() {
    console.log(this.formProduto.value);
    this.produtos.push(this.formProduto.value);
    this.formProduto.reset(new Produto());
  }

}
