import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrystalValidator } from './CrystalValidator';

@Component({
  selector: 'app-card-creator',
  templateUrl: './card-creator.component.html',
  styleUrls: ['./card-creator.component.css']
})
export class CardCreatorComponent implements OnInit {


  public cardCreatorForm:FormGroup;

  constructor(private builder:FormBuilder) { 
    let config:any = {
      imgUrl : ['', Validators.required],
      name : ['', Validators.required],
      description : ['', Validators.required],
      type : ['', Validators.required],
      crystals : [0, {asyncValidators: [new CrystalValidator()] }],
      atk : [0, Validators.required],
      def : [0, Validators.required],
      price : [0, Validators.required]
    }

    this.cardCreatorForm = this.builder.group(config);
  }

  public onSubmit():void{
    console.log(this.cardCreatorForm.get("crystals"));
  }

  ngOnInit(): void {}

}
