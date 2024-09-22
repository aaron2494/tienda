import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  http= inject(HttpClient)
  apiUrl = enviroment.API_URL;
  constructor() { }

  
}
