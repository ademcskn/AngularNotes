import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  brands: Brand[] = [];
  apiUrl = 'https://localhost:44333/api/Brand/GetAll';

  constructor(private httpClient: HttpClient) {}

  getBrands() : Observable<ListResponseModel<Brand>> {
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
