import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";



@Directive( 
    {
        selector: '[crystalValid][ngModel],[crystalValid][formControl]', 
        providers: [
            {
                provide: NG_ASYNC_VALIDATORS, 
                useExisting: forwardRef( 
                    ()=> {
                        return CrystalValidator;
                    }
                ), 
                multi: true
            }
        ]
    }
)

export class CrystalValidator implements AsyncValidator{
    constructor(){}

    validate( control:AbstractControl ):Observable<ValidationErrors|null>{
        const valid:boolean = ( control.value >= 1 && control.value <= 9 );
        if( valid ){
            return of(null);
        }
        else{
            return of({outOfRange:true});
        }
    }
}