import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { HeaderComponent } from "../../../shared/ui/header/header.component";


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [HeaderComponent, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styles:``,
  providers:[ProductsStateService]

})
export default class ProductsListComponent {
productsState = inject(ProductsStateService)
changePage(){
  const page = this.productsState.state.page()+1
  this.productsState.changePage$.next(page )
}
}
