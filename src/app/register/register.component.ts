import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PolicaService } from '../polica.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform=new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('[A-z]{3,100}(.[A-z]{3,100})*@egyptexpress.com.eg')]),
    password:new FormControl('',[Validators.required ,Validators.minLength(8)]),
    department:new FormControl('',Validators.required),
    is_admin:new FormControl('',Validators.required),
  })
  errorOfUser:any
  errorOfemail:any
  constructor(private polica:PolicaService,private router:Router) { }
  register(data:any){
    this.polica.register(data.value).subscribe((result)=>{

console.log(result)
if(result.message=='user added'){
  this.errorOfUser=null;
this.router.navigate(['/loginform'])
}else if(result.message=='username already exist'){
  this.errorOfUser='username already exist';
  this.errorOfemail=null
  this.router.navigate(['/register'])
}else if(result.message=='email already exist'){
  this.errorOfUser=null
  this.errorOfemail='email already exist'
  this.router.navigate(['/register'])
}


    })


  }
  ngOnInit(): void {
  }

}
