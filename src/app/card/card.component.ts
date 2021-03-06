import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
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
    console.log("je suis dans le constructeur du composant Card: ", this.data);
  }

  public resolveImgUrl( url:string): string{
    return environment.imgBaseUrl + url;
  }

  public onClick():void{
    if( this.data !== null )
      this.select.emit(this.data);

    //[routerLink]="'/shop/' + data.id"
  }

  ngOnInit(): void {
    console.log("je suis dans la méthode ngOnInit du composant Card: ", this.data);
  }

}
