import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PolicaService } from '../polica.service';
@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.scss']
})

export class EditpasswordComponent implements OnInit {
  myform=new FormGroup({
    password:new FormControl('',[Validators.required ,Validators.minLength(8)]),
   
  })
  messageerror:any
  constructor(private polica:PolicaService,private _router:Router) { }

  ngOnInit(): void {
  }
  result:any
  editpass(data:any){
    var x=localStorage.getItem('true email')
    console.log(data)
    this.result={email:x,password:data.value.password}
    this.polica.changepass(this.result).subscribe(data=>{

      if(data.message=='pass changed'){
        localStorage.removeItem('true email')
    this._router.navigate(['/loginform'])
      }else{
    this.messageerror='fail to change password'
      }
    })
  }

}
