import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform( cards:Card[], type:string): Card[] {
    if( type === "all")
      return cards; 

    return cards.filter(
      (card:Card, index:number) => {
        return card.type === type;
      }
    );
  }

}
