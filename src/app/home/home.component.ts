import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private sub:Subscription|null;
  public items:Card[];
  constructor(private firestore:AngularFirestore) { 
    this.items = [];
    this.sub = null;
  }

  ngOnInit(): void {
    // this.sub = this.firestore.collection('cards').valueChanges().pipe( 
    //   map( 
    //     (data:any[]) => data as Card[]
    //   )
    // ).subscribe( 
    //   (cards:Card[]) => {
    //     this.items = cards;
    //   }
    // )
  }

  ngOnDestroy():void{
    alert("destroy");
    if( this.sub !== null )
      this.sub.unsubscribe();
  }

}
