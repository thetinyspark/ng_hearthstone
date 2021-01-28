import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card, CARD_TYPES, CATALOG } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private httpService:HttpClient ) { }

  public getCatalog():Card[]{
    return CATALOG;
  }

  public getCardTypes():void{
    this.httpService.get(environment.cardTypesUrl).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }

}
