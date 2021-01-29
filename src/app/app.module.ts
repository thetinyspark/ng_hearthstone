import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogModule } from './catalog.module';
import { ClockComponent } from './clock/clock.component';
import {MatSliderModule} from '@angular/material/slider';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducer';
import { movieReducer } from './ngrx/reducers/movie.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule, 
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAnalyticsModule, 
    // AngularFirestoreModule,
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
    ), 
    StoreModule.forRoot(
      {
        count: counterReducer, 
        movies: movieReducer
      }
    ), BrowserAnimationsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
