import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Card, CATALOG } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public data: Card | null = null;

  constructor(
    private currentRoute: ActivatedRoute,
    private service:CardService
  ) {
  }

  ngOnInit(): void {
    this.currentRoute.paramMap.subscribe(
      (params: ParamMap) => {

        const sid: string | null = params.get("id");
        if (sid === null)
          return;

        const id = parseInt(sid);

        this.service.getCardById(id).subscribe( 
          (card:Card|null) => {
              this.data = card;
          }
        );

      }
    );
  }

}
