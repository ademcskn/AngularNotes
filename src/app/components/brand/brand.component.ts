import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded =false;
  apiUrl = 'https://localhost:44333/api/Brand/GetAll';

  constructor(private branchService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.branchService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded=true;
    });
  }
}
