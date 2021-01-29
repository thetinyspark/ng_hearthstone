import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Card, CATALOG } from './card';

import { CardService } from './card.service';
import { configTestingModule } from './module.config.test';

describe('CardService', () => {
  let service: CardService;

  beforeEach(configTestingModule);

  beforeEach(() => {
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit(
    "should return a list of cards", 
    () => {
      const obs:Observable<Card[]> = of(CATALOG);

      spyOn(service, "getCards").and.returnValue( obs );
      service.getCards().subscribe( 
        (cards:Card[]) => {
          expect(cards.length).toBeGreaterThan(0);
        }
      );
    }
  ); 

  fit( 
    "should validate a type or not", 
    () => {
      //test isValidCardType
    }
  ); 
  
});
