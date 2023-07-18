import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PolicaService } from '../polica.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../User'
import { BehaviorSubject } from 'rxjs';
import { valOfWeight } from 'src/validationn/wieghtvalid';
declare var $: any

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  get Destination() {
    return this.createe.get('Destination')
  }
  createe: FormGroup = new FormGroup({
    AirWayBillCreatedBy: new FormControl("Test Web User"),
    CODAmount: new FormControl(0),
    CODCurrency: new FormControl(""),
    Destination: new FormControl("", Validators.required),
    DutyConsigneePay: new FormControl(0),
    GoodsDescription: new FormControl(""),
    NumberofPeices: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    Origin: new FormControl("CAI"),
    ProductType: new FormControl("DOX",),
    ReceiversAddress1: new FormControl("", Validators.required),
    ReceiversAddress2: new FormControl(""),
    ReceiversCity: new FormControl(""),
    ReceiversCompany: new FormControl("", Validators.required),
    ReceiversContactPerson: new FormControl("", Validators.required),
    ReceiversCountry: new FormControl(""),
    ReceiversEmail: new FormControl(""),
    ReceiversGeoLocation: new FormControl(""),
    ReceiversMobile: new FormControl("", [Validators.required, Validators.pattern('[0-9]{8,11}')]),
    ReceiversPhone: new FormControl(""),
    ReceiversPinCode: new FormControl(""),
    ReceiversProvince: new FormControl(""),
    ReceiversSubCity: new FormControl(""),
    SendersAddress1: new FormControl(""),
    SendersAddress2: new FormControl(""),
    SendersCity: new FormControl("", Validators.required),
    SendersCompany: new FormControl("", Validators.required),
    SendersContactPerson: new FormControl("", Validators.required),
    SendersCountry: new FormControl(""),
    SendersEmail: new FormControl(""),
    SendersGeoLocation: new FormControl(""),
    SendersMobile: new FormControl("", [Validators.required, Validators.pattern('[0-9]{8,11}')]),
    SendersPhone: new FormControl("",),
    SendersPinCode: new FormControl(""),
    SendersSubCity: new FormControl(""),
    ServiceType: new FormControl("PRY"),
    ShipmentDimension: new FormControl("1*1*1"),
    ShipmentInvoiceCurrency: new FormControl("EGP"),
    ShipmentInvoiceValue: new FormControl(0),
    ShipperReference: new FormControl(""),
    ShipperVatAccount: new FormControl(""),
    SpecialInstruction: new FormControl("", Validators.required),
    Weight: new FormControl("", [Validators.pattern('[0-9]*'), valOfWeight]),

  })
  lastsend: any;
  amw: any;
  mylastpolica: any
  ele: any
  mypolica: any
  mycaptcha: any
  errorrobot = false
  today = new Date();
  formdata: any




  date = this.today.getFullYear() + '/' + (this.today.getMonth() + 1) + '/' + this.today.getDate();


  constructor(private _polica: PolicaService, private _router: Router, private _randerrer: Renderer2) {

  }

  ngOnInit(): void {
    let x = localStorage.getItem('is_admin');
    if (x == '1') {
      this.isAdmin = x
    }

    let ss = $("#barcode").JsBarcode("Hi!");
    console.log(ss);

    let script = this._randerrer.createElement('script')
    script.defer = true
    script.sync = true
    script.src = "https://www.google.com/recaptcha/api.js";
    this._randerrer.appendChild(document.body, script)


  }
  baddata = null

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userid')
    localStorage.removeItem('userdepartment')
    localStorage.removeItem('user_tocken')
    localStorage.removeItem('last polica')
    this._polica.userdata.next(null)
    //console.log( this._polica.userdata)
    this._router.navigate(['/loginform'])
  }
  isAdmin: any
  dataOfDwbUser: any
  errorOfInternet: any
  errorOfCreateDwb: any
  badreq: any
  create(val: any) {


    this.formdata = val.value;

    this.lastsend = {
      "UserName": "INTERNAL",
      "AirwayBillData": val.value,

    }

    this._polica.createAMB(this.lastsend).subscribe(data => {

      if (data.Description != "Success") {
        this.badreq = null
        this.errorOfInternet = false
        this.errorOfCreateDwb = data.Description
      } else {
        this.badreq = null
        this.errorOfCreateDwb = null
        this.errorOfInternet = null
        this.amw = data.AirwayBillNumber;
        if (this.amw != null) {
          this.dataOfDwbUser = {
            CODAmount: this.formdata.CODAmount,
            Destination: this.formdata.Destination,
            NumberofPeices: this.formdata.NumberofPeices,
            Origin: this.formdata.Origin,
            ProductType: this.formdata.ProductType,
            ReceiversAddress1: this.formdata.ReceiversAddress1,
            ReceiversCompany: this.formdata.ReceiversCompany,
            ReceiversContactPerson: this.formdata.ReceiversContactPerson,
            ReceiversMobile: this.formdata.ReceiversMobile,

            SendersAddress1: this.formdata.SendersAddress1,
            SendersCity: this.formdata.SendersCity,
            SendersCompany: this.formdata.SendersCompany,
            SendersContactPerson: this.formdata.SendersContactPerson,
            SendersMobile: this.formdata.SendersMobile,

            ShipperReference: this.formdata.ShipperReference,
            SpecialInstruction: this.formdata.SpecialInstruction,
            Weight: this.formdata.Weight,
            GoodsDescription: this.formdata.GoodsDescription,
            AirWayBill: this.amw,
            user_id: localStorage.getItem('userid')
          }
          this._polica.enterDataOfDwb(this.dataOfDwbUser).subscribe(data => {
            if (data) {
              console.log('data of user entered')
            }
          })

          if (this.amw != '') {
            localStorage.setItem('last polica', this.amw)
            this.mypolica = this.amw;
            this.ele = document.querySelector('.mypolica');
            this.ele.style.display = "block";
            this.createe.patchValue({
              ReceiversAddress1: "",
              ReceiversAddress2: "",
              ReceiversCompany: "",
              ReceiversContactPerson: "",
              ReceiversCountry: "",
              ReceiversEmail: "",
              ReceiversGeoLocation: "",
              ReceiversMobile: "",
              ReceiversPhone: "",
              Sender: "",
              Destination: "",
              ShipperReference: "",
              SendersContactPerson: "",
              SendersCompany: "",
              SendersCity: "",
              SendersMobile: "",

              SpecialInstruction: "",




            })
            this.errorrobot = false

          }
          let datee = new Date().toJSON().slice(0, 10);
          console.log(datee); // "2022-06-17"
          // This arrangement can be altered based on how we want the date's format to appear.
          //let currentDate = `${year}-${month}-${day}`;

          let userdetails = localStorage.getItem('userid')
          let dataofdate = { date: datee, user: userdetails, dwb: this.amw }
          let { date, user, dwb } = dataofdate
          this._polica.setdade({ date, user, dwb }).subscribe(data => {
            if (data) {
              console.log("date entered")
            }
          })
        }
        else {
          this.errorOfCreateDwb = null
          this.errorOfInternet = false
          this.badreq = "BAD REQUEST"
        }
      }
    },
      (error) => {
        if (error) {
          this.errorOfInternet = true
        }
      })

  }


  backtoform2() {
    this.ele = document.querySelector('.mypolica');
    this.ele.style.display = "none";

  }


  backtoform() {
    this.ele = document.querySelector('.mylastpolica');
    this.ele.style.display = "none";

  }


  lastpolica() {
    this.mylastpolica = localStorage.getItem('last polica');
    this.ele = document.querySelector('.mylastpolica');
    this.ele.style.display = "block";

  }
  print() {
    this.ele.style.display = "block";

  }
  ngAfterViewInit() {


  }
  first: any
  second: any
  y: any
  fullpolica() {

    this.first = document.querySelector('.firstsection');
    this.second = document.querySelector('.secondsection');

    this.first.style.display = "none";
    this.second.style.display = "none";
    $("#xx").JsBarcode(this.amw);
    $("#yy").JsBarcode(this.amw);

    $("#zz").JsBarcode(this.amw);

    this.backtoform2();



    if (this.amw != '') {
      this.ele = document.querySelector('.fullpolica');
      this.ele.style.display = "flex";

    }


  }

  backtoform3() {
    this.ele = document.querySelector('.fullpolica');
    this.ele.style.display = "none";

    this.first = document.querySelector('.firstsection');
    this.second = document.querySelector('.secondsection');

    this.first.style.display = "block";
    this.second.style.display = "block";



  }
  /*logout(){
    this._polica.checkemailguard=null
  this._polica.checkpassguard=null
  this._router.navigate(['/login'])
  }*/

  nn: any
  resolved(tocken: any) {
    this.mycaptcha = tocken;
    /* this.nn={
       secret:'6LfORf0gAAAAAPpn-LF7WeViXm_mRb-73tlD8gJH',
       response:tocken,
       }

   this._polica.robot(this.nn).subscribe(
     data=>{
       console.log(data)
     }
   )*/
    //console.log(tocken)
    //console.log(grecaptcha.getResponse())
  }
  printy: any;
  ok: any

  printdwb() {
    this.printy = document.querySelector('.printy')
    this.ok = document.querySelector('.ok')
    this.printy.style.display = "none";
    this.ok.style.display = "none"
    //this.fullpolica()
    window.print();
    setTimeout(() => {
      this.printy.style.display = "block";
      this.ok.style.display = "block"

    }, 1000);


  }







}

