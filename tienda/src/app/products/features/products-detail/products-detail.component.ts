import { Component, effect, inject, input, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../shared/interfaces/product.interface';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService]
})
export default class ProductsDetailComponent {
  productDetailState = inject(ProductDetailStateService)
  cartState= inject(CartStateService).state;
id = input.required<string>();

constructor(){
effect(()=>{
  console.log(this.id())
  this.productDetailState.state.getById(this.id())
})
}
addToCart(){
  this.cartState.add({
    product: this.productDetailState.state.product()!,
    quantity:1
  })
 
}


}
