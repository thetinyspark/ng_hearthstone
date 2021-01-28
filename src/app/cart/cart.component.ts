import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cards:Card[] = [];
  constructor( private service:CartService) { }

  ngOnInit(): void {
    this.service.getCart().subscribe( 
      (cards:Card[]) => {
        this.cards = cards;
      }
    );
  }

  public onDelete(card:Card):void{
    this.service.remove(card);
  }

  public getTotal():number{
    let total:number = 0;
    for( let i:number = 0; i < this.cards.length; i++ ){
      total += this.cards[i].price;
    }
    return total;
  }

}
