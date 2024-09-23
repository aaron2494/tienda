import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import {signalSlice} from 'ngxtension/signal-slice'
import { ProductsService } from './products.service';
import { catchError, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';

interface State{
  product:Product | null;
  status:'loading'|'success'|'error';
  
}

@Injectable()
export class ProductDetailStateService {
  private productService = inject(ProductsService)

private initalState:State={
  product:null,
  status:'loading'as const,
  
}



state = signalSlice ({
  initialState: this.initalState,
  actionSources:{
    getById:(_state, $:Observable<string>)=>$.pipe(
        switchMap((id)=>this.productService.getProduct(id)),
        map(data=>({product:data, status:'success'as const})),
    )
  }
})
}
