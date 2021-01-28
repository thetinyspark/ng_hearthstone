import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card, CARD_TYPES, CATALOG } from './card';

import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private httpService:HttpClient ) { }

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

}
