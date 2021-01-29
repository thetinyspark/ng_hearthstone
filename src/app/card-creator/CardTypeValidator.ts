import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { CardService } from "../card.service";



@Directive( 
    {
        selector: '[cardTypeValid][ngModel],[cardTypeValid][formControl]', 
        providers: [
            {
                provide: NG_ASYNC_VALIDATORS, 
                useExisting: forwardRef( 
                    ()=> {
                        return CardTypeValidator;
                    }
                ), 
                multi: true
            }
        ]
    }
)

export class CardTypeValidator implements AsyncValidator{
    constructor( private service:CardService){}

    validate( control:AbstractControl ):Observable<ValidationErrors|null>{

        return this.service.isCardTypeValid(control.value).pipe( 
            map( 
                (valid:boolean) => {
                    if( valid ){
                        return null;
                    }
                    else{
                        return {invalidCardType: true};
                    }
                }
            )
        )
    }
}