import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { CartComponent } from './parent-enfant/cart/cart.component';
import { ItemComponent } from './parent-enfant/item/item.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'gallerie', component: PhotoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
