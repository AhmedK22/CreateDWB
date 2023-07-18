import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PolicaService } from '../polica.service';
import{User}from '../User'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginform:FormGroup=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required ,Validators.minLength(8)]),
  })
  constructor(private polica:PolicaService,private router:Router) { }

messageofNotAuth:any
  login(data:any){
  this.polica.login(data.value).subscribe((result)=>{

    console.log(result)
    if(result.message=='success'){
localStorage.setItem("username",result.name)
localStorage.setItem("userid",result.id)
localStorage.setItem("userdepartment",result.department)
localStorage.setItem("user_tocken",result.tocken)
localStorage.setItem("is_admin",result.is_admin)
  this.polica.saveuserdata(result.id,result.name,result.department,result.tocken)

   this.router.navigate(['/create'])
    }else if(result.message=='user or password is wrong'){
      this.messageofNotAuth='user or password is wrong'
      this.router.navigate(['/loginform'])
    }

        })
}
  ngOnInit(): void {
  }

}
