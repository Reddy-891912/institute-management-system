import { AbstractControl } from "@angular/forms";

export function mohithItEmail(control:AbstractControl){
    if(!control.value || control.value?.includes('@mohithIt.com')){
        return null;
    }
    else{
        return {'mohithItEmail':'invalid domain'};
    }
}