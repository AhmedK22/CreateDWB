import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import{ PolicaService} from '../polica.service';
import { Router, RouterModule } from '@angular/router'
declare var $:any

@Component({
  selector: 'app-arabic-form',
  templateUrl: './arabic-form.component.html',
  styleUrls: ['./arabic-form.component.scss']
})
export class ArabicFormComponent implements OnInit {
  get Destination(){
    return this.createe.get('Destination')
   }
   createe:FormGroup=new FormGroup({
     AirWayBillCreatedBy:new FormControl("Test Web User"),
     CODAmount:new FormControl(0),
     CODCurrency:new FormControl(""),
     Destination:new FormControl("",Validators.required),
     DutyConsigneePay:new FormControl(0),
     GoodsDescription:new FormControl("Company Dox"),
     NumberofPeices:new FormControl(1),
     Origin:new FormControl("CAI"),
     ProductType:new FormControl("DOX",),
     ReceiversAddress1:new FormControl("",Validators.required),
     ReceiversAddress2:new FormControl(""),
     ReceiversCity:new FormControl(""),
     ReceiversCompany:new FormControl("",Validators.required),
     ReceiversContactPerson:new FormControl("",Validators.required),
     ReceiversCountry:new FormControl(""),
     ReceiversEmail:new FormControl(""),
     ReceiversGeoLocation:new FormControl(""),
     ReceiversMobile:new FormControl("",[Validators.required,Validators.pattern('[0-9]{8,11}')]),
     ReceiversPhone:new FormControl(""),
     ReceiversPinCode:new FormControl(""),
     ReceiversProvince:new FormControl(""),
     ReceiversSubCity:new FormControl(""),
     SendersAddress1:new FormControl("Masaken Street"),
     SendersAddress2:new FormControl("Helipolis"),
     SendersCity:new FormControl("",Validators.required),
     SendersCompany:new FormControl("",Validators.required),
     SendersContactPerson:new FormControl("",Validators.required),
     SendersCountry:new FormControl("EGYPT"),
     SendersEmail:new FormControl("itm@egyptepxress.eg"),
     SendersGeoLocation:new FormControl(""),
     SendersMobile:new FormControl("",Validators.required),
     SendersPhone:new FormControl("11222333"),
     SendersPinCode:new FormControl(""),
     SendersSubCity:new FormControl(""),
     ServiceType:new FormControl("PRY"),
     ShipmentDimension:new FormControl("1*1*1"),
     ShipmentInvoiceCurrency:new FormControl("EGP"),
     ShipmentInvoiceValue:new FormControl(0),
     ShipperReference:new FormControl(""),
     ShipperVatAccount:new FormControl(""),
     SpecialInstruction:new FormControl(""),
     Weight:new FormControl(1),

   })
   lastsend:any;
   amw:any;
   mylastpolica:any="55"
   ele:any
   mypolica:any
   mycaptcha:any
   errorrobot=false
   today = new Date();
   formdata:any

   date =this.today.getFullYear()+'/'+(this.today.getMonth()+1)+'/'+this.today.getDate();


   constructor(private _polica:PolicaService,private _router:Router,private _randerrer:Renderer2) {

    }
    trueemail="ahmed@gmil.com";
    truepass=12345678
   ngOnInit(): void {
     let script= this._randerrer.createElement('script')
     script.defer=true
     script.sync=true
     script.src="https://www.google.com/recaptcha/api.js";
     this._randerrer.appendChild(document.body,script)
   }




   create(val:any){
     if(this.mycaptcha!=null){
      this.formdata=val.value;
      console.log(val.value);

 //  console.log(val);
     this.lastsend={
       "UserName":"WEBSETest",
       "Password":"FBFk9vOanXw=",
        "AccountNo":" kZGy2o+Ve6s=",
       "AirwayBillData":val.value,

     }
    // console.log(this.lastsend);
     this._polica.createAMB(this.lastsend).subscribe((data)=>{
       console.log(data);
       this.amw=data.AirwayBillNumber;
       console.log(this.amw);
 if(this.amw != ''){
   localStorage.setItem('last polica',this.amw)
   this.mypolica=this.amw;
     this.ele=document.querySelector('.mypolica');
     this.ele.style.display="block";
     this.createe.patchValue({
       ReceiversAddress1:"",
       ReceiversAddress2:"",
       ReceiversCompany:"",
       ReceiversContactPerson:"",
       ReceiversCountry:"",
       ReceiversEmail:"",
       ReceiversGeoLocation:"",
       ReceiversMobile:"",
       ReceiversPhone:"",
       Sender:"",
       Destination:"",
       ShipperReference:"",

     SpecialInstruction:"",




     })
     this.errorrobot=false

 }

 })}
 else{
   this.errorrobot=true

 }
 }


 backtoform2(){
   this.ele=document.querySelector('.mypolica');
  this.ele.style.display="none";

 }


   backtoform(){
     this.ele=document.querySelector('.mylastpolica');
    this.ele.style.display="none";

   }


   lastpolica(){
     this.mylastpolica=localStorage.getItem('last polica');
     this.ele=document.querySelector('.mylastpolica');
     this.ele.style.display="block";

   }
   print(){
    this.ele.style.display="block";

  }
  first:any
  second:any
  fullpolica(){

    this.first=document.querySelector('.firstsection');
    this.second=document.querySelector('.secondsection');

  this.first.style.display="none";
  this.second.style.display="none";
    $("#xx").JsBarcode(this.amw);

    this.backtoform2();



    if(this.amw != ''){
      this.ele=document.querySelector('.fullpolica');
      this.ele.style.display="block";

    }


  }
nn:any;
   backtoform3(){
     this.ele=document.querySelector('.fullpolica');
    this.ele.style.display="none";
    this.first=document.querySelector('.firstsection');
 this.second=document.querySelector('.secondsection');

 this.first.style.display="block";
 this.second.style.display="block";

   }
   /*logout(){
     this._polica.checkemailguard=null
   this._polica.checkpassguard=null
   this._router.navigate(['/login'])
   }*/
   resolved(tocken:any){
  this.mycaptcha=tocken;
  /*this.nn={
    secret:'6LfORf0gAAAAAPpn-LF7WeViXm_mRb-73tlD8gJH',
    response:tocken,
    }

this._polica.robot(this.nn).subscribe(
  data=>{
    console.log(data)
  }
)

     console.log(tocken)*/
   }
   printy:any;
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



 }









