import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  brands: Brand[] = [];
  apiUrl = 'https://localhost:44333/api/Brand/GetAll';

  constructor(private httpClient: HttpClient) {}

  getBrands() : Observable<BrandResponseModel> {
   return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
