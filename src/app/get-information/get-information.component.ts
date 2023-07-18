import { Component, OnInit } from '@angular/core';
import { PolicaService } from '../polica.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Data } from 'popper.js';
import { map } from 'rxjs';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-get-information',
  templateUrl: './get-information.component.html',
  styleUrls: ['./get-information.component.scss']
})
export class GetInformationComponent implements OnInit {

  constructor(private _polica:PolicaService) { }
myform=new FormGroup({
  firstdate:new FormControl('',Validators.required),
  seconddate:new FormControl('',Validators.required),
  ITDepartment:new FormControl(''),
  CustomerServiceDepartment:new FormControl(''),
  CustomsDepartment:new FormControl(''),
  RetailDepartment:new FormControl(''),
  GroundOperationDepartment:new FormControl(''),
  Airport:new FormControl(''),
  DC:new FormControl(''),
  CollectionDepartment:new FormControl(''),
  FinanceDepartment:new FormControl(''),
  SalesDepartment:new FormControl(''),
  BurchasingDepartment:new FormControl(''),
  InternalAuditandQualityDepartment:new FormControl(''),
  HRDepartment:new FormControl(''),
})
lastalldata:any
count:any;
  ngOnInit(): void {
  }

   messageOfDeptErr:any
   errorOfDate:any
errOfNoData:any
getinfo(data:any){
let x=data.value

let arrayOfDept:any=[]
if(x.ITDepartment==true){arrayOfDept.push("IT Department")};
if(x.CustomerServiceDepartment==true){arrayOfDept.push("Customer Service Department")};
if(x.CustomsDepartment==true){arrayOfDept.push("Customs Department")};
if(x.RetailDepartment==true){arrayOfDept.push("Retail Department")};
if(x.GroundOperationDepartment==true){arrayOfDept.push("Ground Operation Department")};
if(x.Airport==true){arrayOfDept.push("Airport")};
if(x.DC==true){arrayOfDept.push("DC")};
if(x.CollectionDepartment==true){arrayOfDept.push("Collection Department")};
if(x.FinanceDepartment==true){arrayOfDept.push("Finance Department")};
if(x.SalesDepartment==true){arrayOfDept.push("SalesDepartment")};
if(x.BurchasingDepartment==true){arrayOfDept.push("Burchasing Department")};
if(x.InternalAuditandQualityDepartment==true){arrayOfDept.push("Internal Audit and Quality Department")};
if(x.HRDepartment==true){arrayOfDept.push("HRDepartment")};
  console.log(data.value);

if(arrayOfDept.length==0){
  this.messageOfDeptErr='department is required';

}
else if(x.firstdate>x.seconddate){
  this.errorOfDate="first date must be less than the second date "
}
else{
 
  this.errOfNoData=null;
  this.messageOfDeptErr=null
    let dataofform={
      department:arrayOfDept,
      firstdate:data.value.firstdate,
      seconddate:data.value.seconddate
    }
    this._polica.getalldata(dataofform).subscribe(result=>{
      if(result.alldata.length>0){
        this.count=result.alldata.length;
        console.log(result.alldata);
        this.lastalldata=result.alldata
        this.myform.patchValue({
         firstdate:null,
         seconddate:null,
         //department:null
        })
        arrayOfDept.slice(0,arrayOfDept.length);
        this.errOfNoData=null;
      }
      else{
        this.lastalldata=null
        this.errOfNoData='no data to display'
      }

       })
  }

}
filename= 'Samplesheet.xlsx'
imasexcell(){
  let element=document.getElementById('excell-table');
  const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element)
  const wb:XLSX.WorkBook=XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb,ws,'sheet1')
  XLSX.writeFile(wb,this.filename)
}
}
