import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public cards:Card[] = [];
  constructor() { 
    const card1:Card = new Card();
    const card2:Card = new Card();
    const card3:Card = new Card();

    card1.nom = "Aladdin";
    card1.imgUrl = "/assets/aladdin.jpg";
    card1.description = 'Prince ali c\'est bien lui';

    card2.nom = "Genie";
    card2.imgUrl = "/assets/genie.gif";

    card3.nom = "Jasmine";
    card3.imgUrl = "/assets/jasmine.jpg";

    this.cards.push(card1, card2, card3);
  }

  ngOnInit(): void {

  }

}
