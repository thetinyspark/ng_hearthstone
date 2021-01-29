import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx/actions/counter.action';
import { addMovie } from '../ngrx/actions/movie.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public count:Observable<number>; 
  public movies:Observable<string[]>; 

  constructor(private store:Store<{count:number, movies:string[]}>) { 
    this.count = this.store.select("count");
    this.movies = this.store.select("movies");
  }

  public onMovie():void{
    this.store.dispatch(addMovie({ movieName: "Pirates des Caraïbes" }));
  }

  onIncrement():void{
    this.store.dispatch(increment());
  }

  onDecrement():void{
    this.store.dispatch(decrement());
  }

  onReset():void{
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
  }


}
