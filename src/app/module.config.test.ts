import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CardCreatorComponent } from './card-creator/card-creator.component';
import { CardService } from './card.service';
import { CardComponent } from './card/card.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ClockComponent } from './clock/clock.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { TypePipe } from './type.pipe';

export async function configTestingModule() {
    await TestBed.configureTestingModule(config).compileComponents();
}

export const config = {
    declarations: [
      AppComponent,
      HomeComponent,
      ClockComponent, 
      CatalogComponent, 
      CartComponent, 
      ShopComponent,
      CardComponent, 
      TypePipe, 
      CardCreatorComponent
    ],
    imports: [
      BrowserModule, 
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule, 
      FormsModule, 
      RouterTestingModule
    ],
    providers: [CardService, CartService, TypePipe],
    
    bootstrap: [AppComponent]
  }