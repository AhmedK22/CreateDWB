import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import{BehaviorSubject, map, Observable, observable} from 'rxjs'

import{Route, Router} from '@angular/router';
import { environment } from 'src/environments/environment';

import jwt_decode from "jwt-decode";
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class PolicaService {
  constructor(public _http:HttpClient  ) {
}

headers:any={
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
}




  testcreateerror={
    "AirwayBillData": {
       // "AirWayBillCreatedBy": "Test Web User",
        "CODAmount": 0,
       // "CODCurrency": "",
        "Destination": "CAI",
       // "DutyConsigneePay": 0,
        "GoodsDescription": "",
        "NumberofPeices": 1,
       // "Origin": "CAI",
        "ProductType": "FRE",
        "ReceiversAddress1": "عقار 35أ - شارع أحمد أنسي - ناصية شارع شريف - حلوان .",
        "ReceiversAddress2": "عماره غاز بتروتريد  والاكاديميه العلوم التطبيقيه  امام محل الاحذية علي بابا .",
        "ReceiversCity": "Greater Cairo",
        "ReceiversCompany": "Fawry, Helwan 2",
        "ReceiversContactPerson": "Fawry",
        "ReceiversCountry": "Egypt",
        "ReceiversEmail": "HaramtawoonBranch.Branch@Fawry.com",
        "ReceiversGeoLocation": "",
        "ReceiversMobile": "",
        "ReceiversPhone": "",
        "ReceiversPinCode": "11722",
        "ReceiversProvince": "Cairo",
        "ReceiversSubCity": "حلوان",
        "SendersAddress1": "عقار رقم 40 شارع المطرية الدور الأرضى شمال مدخل العقار قريب من سوبر ماركت الفرجانى.",
        "SendersAddress2": "بجوار مطعم كوك دوور.",
        "SendersCity": "Cairo",
        "SendersCompany": "Test Supplier",
        "SendersContactPerson": "Splubber",
        "SendersCountry": "Egypt",
        "SendersEmail": "info@handycats.co.za",
        "SendersGeoLocation": "",
        "SendersMobile": "0738482718",
        "SendersPhone": "0738482718",
        "SendersPinCode": "11772",
        "SendersSubCity": "عين شمس",
        "ServiceType": "FRG",
        "ShipmentDimension": "",
       // "ShipmentInvoiceCurrency": "EGP",
       // "ShipmentInvoiceValue": 0,
        "ShipperReference": "PAR2096578986",
        "ShipperVatAccount": "",
        "SpecialInstruction": "",
        "Weight": 0.1
    },
    "AccountNo": "kZGy2o+Ve6s=",
    "Password": "FBFk9vOanXw=",
    "UserName": "WEBSETest"
}
TEST= {
	"UserName":"WEBSETest",
	"Password":"FBFk9vOanXw=",
   "AccountNo":" kZGy2o+Ve6s=",
  "AirwayBillData":
  {

    "AirWayBillCreatedBy":"Test Web User",
    "CODAmount" : 0 ,
    "CODCurrency":"",
    "Destination":"ALX",
    "DutyConsigneePay" :0,
    "GoodsDescription":"Mobile Accessories",
    "NumberofPeices" :1,
    "Origin":"CAI",
    "ProductType":"FRE",
    "ReceiversAddress1":"2nd Ind. zone",
    "ReceiversAddress2":"Piece 9 - Block 16 Borg Elarab City",
    "ReceiversCity":"Alexandria",
    "ReceiversCompany":"Egypt Expresss",
    "ReceiversContactPerson":"Amin",
    "ReceiversCountry":"Egypt",
    "ReceiversEmail":"it@egexpress.eg",
    "ReceiversGeoLocation":"",
    "ReceiversMobile":"01273445799",
    "ReceiversPhone":"01293445799",
    "ReceiversPinCode":"",
    "ReceiversProvince":"",
    "ReceiversSubCity":"",
    "SendersAddress1":"Masaken Street",
    "SendersAddress2":"Helipolis",
    "SendersCity":"Helipolis",
    "SendersCompany":"Egypt Express",
    "SendersContactPerson":"Mr.Amin",
    "SendersCountry":"Egypt",
    "SendersEmail":"itm@egyptepxress.eg",
    "SendersGeoLocation":"",
    "SendersMobile":"11222333",
    "SendersPhone":"11222333",
    "SendersPinCode":"",
    "SendersSubCity":"",
    "ServiceType":"FRG",
    "ShipmentDimension":"",
    "ShipmentInvoiceCurrency":"EGP",
    "ShipmentInvoiceValue" :0,
    "ShipperReference":"JD123444",
    "ShipperVatAccount":"",
    "SpecialInstruction":"Confirm Location before Delivery",
    "Weight" :6
  }
}


checkemailguard:any=null
checkpassguard:any=null


  createAMB(amw:any):Observable<any>{
    return this._http.post('http://172.30.1.46:1929/EGEXPService.svc/CreateAirwayBill',amw);

  }
  //http://82.129.197.86:1929/EGEXPService.svc/CreateAirwayBill
  //https://egxpress.me/EGEXPService.svc/CreateAirwayBill
  robot(secrit:any):Observable<any>{

    return this._http.post('https://www.google.com/recaptcha/api/siteverify',secrit,
    {
      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*' })
    }
    )


  }



register(data:any):Observable<any>{
  return this._http.post('http://172.30.1.249:8080/users/register',data)
}

userdata=new BehaviorSubject(null);

login(data:any):Observable<any>{

  return this._http.post('http://172.30.1.249:8080/users/login',data)
}
lastuser:any
saveuserdata(x:any,y:any,z:any,n:any){
  this.lastuser=new User(x,y,z,n);

  this.userdata.next(this.lastuser);
}

setdade(data:any){
  return this._http.post('http://172.30.1.249:8080/users/getdate',data)
}

getalldata(data:any):Observable<any>{
  return this._http.post('http://172.30.1.249:8080/users/getalldata',data)
}


checkemail(data:any):Observable<any>{
  return this._http.post('http://172.30.1.249:8080/users/checkemail',data)
}


changepass(data:any):Observable<any>{
  return this._http.patch('http://172.30.1.249:8080/users/updatepassword',data)
}

enterDataOfDwb(data:any):Observable<any>{
  return this._http.post('http://172.30.1.249:8080/users/dataofdwb',data)
}
getDataOfDwb(data:any):Observable<any>{
  return this._http.post('http://172.30.1.249:8080/users/getDataOfDwb',data)
}

getlastfive(data:any):Observable<any>{
  return this._http.post('http://172.30.1.249:8080/users/topfive',data)
}


}

