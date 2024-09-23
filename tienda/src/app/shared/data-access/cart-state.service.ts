import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageService } from './storage.service';
import { ProductItemCart } from '../interfaces/product.interface';
import { map } from 'rxjs';

interface State{
  products: ProductItemCart[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartStateService {
  
private _storageService=inject(StorageService)

private initialState: State={
  products:[],
  loaded: false,
};
loadProducts$=this._storageService.loadProducts().pipe(
  map((products)=> ({products,loaded: true}))
);

state =signalSlice({
  initialState:this.initialState,
})
}
