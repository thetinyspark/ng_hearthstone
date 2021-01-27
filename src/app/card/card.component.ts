import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imgUrl:string          = '/assets/balkany.jpg';
  public nom:string             = 'Roi des voleurs';
  public description:string     = 'Balkany oui c\'est bien lui, le roi de levallois';
  public crystals:number        = 1;
  public atk:number             = 1;
  public def:number             = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
