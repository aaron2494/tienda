import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';

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
  
id = input.required<string>();

constructor(){
effect(()=>{
  console.log(this.id())
  this.productDetailState.state.getById(this.id())
})
}
}
