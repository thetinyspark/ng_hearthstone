import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {

  public date:Date = new Date();

  constructor( private cd:ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh():void{
    this.date = new Date();
    const minutes:number = this.date.getSeconds();
    if( minutes % 5 === 0 )
      this.cd.markForCheck();

    setTimeout( () => this.refresh(), 1000 );
  }

}
