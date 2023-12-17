import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProdutoDTO} from '../../models/produto.dto';
import {ProdutoService} from "../../services/domain/produto.service";

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items: ProdutoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoService: ProdutoService) {
  }

  ionViewDidLoad() {
    const categoria_id = this.navParams.get('categoria_id');
    this.produtoService.findByCategoria(categoria_id).subscribe(
      response => {
        this.items = response['content'];
      },
      error => {
      });
    this.items = [
      {
        id: "1",
        nome: 'Mouse',
        preco: 80.99
      },
      {
        id: "2",
        nome: 'Teclado',
        preco: 100.00
      }
    ]
  };
}
