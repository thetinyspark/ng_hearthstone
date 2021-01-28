import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CardService } from './card.service';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { TypePipe } from './type.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CatalogComponent, 
    CartComponent, 
    ShopComponent,
    CardComponent, 
    TypePipe
  ],
  imports: [
    HttpClientModule,
    CommonModule, 
    FormsModule, 
    RouterModule.forChild(
      [
        {
          component: CatalogComponent, 
          path: "catalog"
        }, 
        {
          component: CartComponent, 
          path: "cart"
        }, 
        {
          component: ShopComponent, 
          path: "shop/:id"
        }
      ]
    )
  ], 
  providers: [CardService, CartService, TypePipe]
})
export class CatalogModule { }
