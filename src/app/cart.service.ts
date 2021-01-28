import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs"; 
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cards:Card[] = [];
  constructor() { }

  public getCart():Observable<Card[]>{
    return of(this.cards);
  }

  public add(card:Card):void{
    this.cards.push(card);
  }

  public remove(card:Card):void{
    const index:number = this.cards.indexOf(card);
    this.cards.splice( index, 1 );
  }
}
