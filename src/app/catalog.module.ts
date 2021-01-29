import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardService } from './card.service';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { TypePipe } from './type.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CardCreatorComponent } from './card-creator/card-creator.component';



@NgModule({
  declarations: [
    CatalogComponent, 
    CartComponent, 
    ShopComponent,
    CardComponent, 
    TypePipe, 
    CardCreatorComponent
  ],
  imports: [
    ReactiveFormsModule,
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
          component: CardCreatorComponent, 
          path: "create"
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
