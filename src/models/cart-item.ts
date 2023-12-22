import {ProdutoDTO} from "./dto/produto.dto";

export interface CartItem {
  quantidade: number,
  produto: ProdutoDTO
}
