import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TypePipe } from './type.pipe';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CardService } from './card.service';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CatalogComponent,
    TypePipe,
    CartComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    RouterModule.forRoot(
      [
        {
          component: CatalogComponent, 
          path: "catalog"
        }, 
        {
          component: HomeComponent, 
          path: "home"
        }, 
        {
          component: CartComponent, 
          path: "cart"
        }, 
        {
          component: ShopComponent, 
          path: "shop/:id"
        }
      ], 
      {
        useHash: true
      }
    )
  ],
  providers: [CardService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
