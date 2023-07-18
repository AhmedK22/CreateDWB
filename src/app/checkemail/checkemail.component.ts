import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PolicaService } from '../polica.service';
@Component({
  selector: 'app-checkemail',
  templateUrl: './checkemail.component.html',
  styleUrls: ['./checkemail.component.scss']
})
export class CheckemailComponent implements OnInit {
  myform=new FormGroup({
    email:new FormControl('',Validators.required)
  })
  constructor(private polica:PolicaService,private _router:Router) { }

  ngOnInit(): void {
  }
  messageerror:any
  checkemaill(data:any){
this.polica.checkemail(data.value).subscribe(result=>{
  console.log(result)
  if(result.message=='true email'){
    localStorage.setItem("true email",data.value.email)
this._router.navigate(['/editpass'])
  }else{
this.messageerror='wrong email'
  }
})
  }

}
