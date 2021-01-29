import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogModule } from './catalog.module';
import { ClockComponent } from './clock/clock.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockComponent
  ],
  imports: [
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
