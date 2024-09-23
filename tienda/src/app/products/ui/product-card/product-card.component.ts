import { RouterLink } from '@angular/router';
import { Product } from './../../../shared/interfaces/product.interface';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  
})
export class ProductCardComponent {
product = input.required<Product>()

}
