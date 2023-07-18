import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PolicaService } from '../polica.service';
declare var $:any
@Component({
  selector: 'app-get-dwb',
  templateUrl: './get-dwb.component.html',
  styleUrls: ['./get-dwb.component.scss']
})
export class GetDwbComponent implements OnInit {

  x:any
myform=new FormGroup({
  AirWayBill:new FormControl(``,[Validators.required])
})
formdata:any
today=new Date()

date =this.today.getFullYear()+'/'+(this.today.getMonth()+1)+'/'+this.today.getDate();

  constructor(private _polica:PolicaService,private _activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.x=  this._activatedroute.snapshot.paramMap.get("number")
    console.log(this.x)

  }
  ngAfterViewInit(){
    this.x=  this._activatedroute.snapshot.paramMap.get("number")
    console.log(this.x)
  }
getdata(dataa:any){
  let lastdata={AirWayBill:this.x}


  this._polica.getDataOfDwb(lastdata).subscribe(data=>{
    console.log(data)

    this.formdata=data.ressult[0];
    console.log(this.formdata)
    $("#xx").JsBarcode(this.formdata.AirWayBill);
  $("#yy").JsBarcode(this.formdata.AirWayBill);
  $("#zz").JsBarcode(this.formdata.AirWayBill);

  this.first=document.querySelector('.firstsection');
  this.first.style.display="none";
  this.ele=document.querySelector('.fullpolica');
 this.ele.style.display="block";
  })
 
}
first:any
second:any
ele:any


printy:any
ok:any
printdwb(){
  this.printy=document.querySelector('.printy')
  this.ok=document.querySelector('.ok')
  this.printy.style.display="none";
  this.ok.style.display="none"
    //this.fullpolica()
    window.print();
    setTimeout(() => {
      this.printy.style.display="block";
   this.ok.style.display="block"

    }, 1000);


  }
  backtoform3(){
  this.ele=document.querySelector('.fullpolica');
 this.ele.style.display="none";

 this.first=document.querySelector('.firstsection');
 this.second=document.querySelector('.secondsection');

 this.first.style.display="block";
 this.second.style.display="block";


}

}
