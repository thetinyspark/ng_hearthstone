import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public data:Card | null = null;

  @Output()
  public select:EventEmitter<Card>;

  constructor() { 
    this.select = new EventEmitter<Card>();
  }

  public onClick():void{
    if( this.data !== null )
      this.select.emit(this.data);

    //[routerLink]="'/shop/' + data.id"
  }

  ngOnInit(): void {
  }

}
