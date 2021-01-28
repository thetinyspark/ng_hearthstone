import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogModule } from './catalog.module';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      [
        {
          component: HomeComponent, 
          path: "home"
        }, 
        {
          path: "hearthstone", 
          loadChildren: () => {
            return import('./catalog.module').then( 
              (mod) => {
                return mod.CatalogModule;
              }
            )
          }
        }
      ], 
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
