import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card, CARD_TYPES, CATALOG } from '../card';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public types: any[] = [];
  public cards: Card[] = [];
  public currentType: string = 'all';

  private router:Router;

  constructor( param_router:Router) {

    this.router = param_router;
    this.types = CARD_TYPES;
    this.cards = CATALOG;
    
  }

  public onCardSelect(card:Card):void{
    const ok = confirm("Voulez-vous acheter " + card.name + " ?" );
    if( ok ){
      const url:string = "/shop/" + card.id;
      this.router.navigate([url]);
    }
  }

  ngOnInit(): void {

  }

}
