import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemComponent, CartComponent],
  exports: [ItemComponent, CartComponent],
})
export class ParentEnfantModule {}
