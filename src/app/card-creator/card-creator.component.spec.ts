import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configTestingModule } from '../module.config.test';

import { CardCreatorComponent } from './card-creator.component';

describe('CardCreatorComponent', () => {
  let component: CardCreatorComponent;
  let fixture: ComponentFixture<CardCreatorComponent>;

  beforeEach(configTestingModule);

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
