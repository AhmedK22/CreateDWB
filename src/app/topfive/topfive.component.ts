import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PolicaService } from '../polica.service';

@Component({
  selector: 'app-topfive',
  templateUrl: './topfive.component.html',
  styleUrls: ['./topfive.component.scss']
})
export class TopfiveComponent implements OnInit {

  constructor(private _polica:PolicaService,private _router:Router) { }
x={id:localStorage.getItem('userid')}
  ngOnInit(): void {
  }
  messageoferror:any
  topfivedata:any
  gettopfive(){
    this._polica.getlastfive(this.x).subscribe(data=>{
      console.log(data)
      if(data.result.length>0){
        this.messageoferror=null
        this.topfivedata=data.result

      }
      else{
        this.messageoferror='There Is No Data To Display'
      }
    })
  }
  getdwb(data:any){
this._router.navigate(['/getdwb',data.innerHTML])

  }
}
