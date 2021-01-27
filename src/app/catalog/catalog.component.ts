import { Component, OnInit } from '@angular/core';
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

  constructor() {

    this.types = CARD_TYPES;
    this.cards = CATALOG;
    
  }

  ngOnInit(): void {

  }

}
