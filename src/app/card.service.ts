import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card, CARD_TYPES, CATALOG } from './card';

import {filter, map} from "rxjs/operators";
import { Observable  } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private httpService:HttpClient, private firestore:AngularFirestore ) { }

  public getCatalog():Card[]{
    return CATALOG;
  }

  public getCardTypes():Observable<any[]>{
    const obs = this.httpService.get(environment.cardTypesUrl);
    return obs.pipe( 
      map(
        (data:any) => {
          return data as any[];
        }
      )
    );
  }

  public isCardTypeValid(value:string):Observable<boolean>{
    return this.getCardTypes().pipe( 
      map( 
        (types:any[]):boolean => {
          
          for( let i:number = 0; i < types.length; i++ ){
            if( types[i].value === value )
              return true;
          }

          return false;
        }
      )
    )
  }

  public getCards():Observable<Card[]>{
    return this.httpService.get<Card[]>(environment.cardsUrl);
    // return this.firestore.collection('cards').valueChanges().pipe( 
    //   map( 
    //     (data:any[]) => data as Card[]
    //   )
    // );
  }

  public getCardById( id:number ):Observable<Card|null>{
    return this.getCards().pipe( 
      map( 
        ( cards:Card[] ) => {
          const filtered:Card|undefined = cards.find( (current:Card) => current.id === id );
          if( filtered )
            return filtered;
          else
            return null;
        }
      )
    )
  }

}
