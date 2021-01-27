import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Card, CATALOG } from '../card';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private currentRoute:ActivatedRoute;
  public data:Card | null = null;

  constructor( param_route:ActivatedRoute ) { 
    this.currentRoute = param_route;
  }

  ngOnInit(): void {
    this.currentRoute.paramMap.subscribe( 
      (params:ParamMap) => {

        const sid:string | null = params.get("id");
        if( sid === null )
          return;

        const id = parseInt(sid);
        const filtered:Card[] = CATALOG.filter( (card:Card) => card.id === id ); 
        if( filtered.length > 0 ){
          this.data = filtered[0];
        }
      }
    )
  }

}
