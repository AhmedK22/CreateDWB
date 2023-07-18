import { AbstractControl } from "@angular/forms";

export function valOfWeight(control:AbstractControl){
if(control.value<=0){
return {"errorOfWeight":{value:"it must be greater than 0"}}
}
else{
  return null;
}
}
