import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string   = 'hearthstone';
  public cards:Card[]   = [];

  constructor(){
    const card1:Card = new Card();
    const card2:Card = new Card();
    const card3:Card = new Card();

    card1.nom = "Aladdin";
    card1.imgUrl = "/assets/aladdin.jpg";

    card2.nom = "Genie";
    card2.imgUrl = "/assets/genie.gif";
    
    card3.nom = "Jasmine";
    card3.imgUrl = "/assets/jasmine.jpg";

    this.cards.push(card1, card2, card3);
  }
}

