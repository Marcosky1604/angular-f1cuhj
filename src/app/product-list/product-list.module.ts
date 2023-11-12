import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProductListComponent, ProductDetailsComponent],
  exports: [ProductListComponent, ProductDetailsComponent],
})
export class ProductListModule {}
