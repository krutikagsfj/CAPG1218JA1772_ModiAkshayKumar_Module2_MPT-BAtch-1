import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor(private mobileser:MobileserviceService) { }
  mData;
  sortByAsc: boolean = true;
  ngOnInit() {
    this.mobileser.getMobileDetails().subscribe((res)=>{
      this.mData=res;
    })
  }
  sortMobile(parm)
  {
    if(this.sortByAsc == false) {
      this.sortByAsc = true;
      this.mData.sort((a, b) => {
        return b[parm].localeCompare(a[parm]);
     
      });
    } else
    if(this.sortByAsc==true) {
      this.sortByAsc = false;
      this.mData.sort((a, b) => {
       return a[parm].localeCompare(b[parm]);
     
     });
   }

  }
  //delete method it takes the particula mobile object as argument
  delete(mobile){
    let index1=this.mData.indexOf(mobile);
    this.mData.splice(index1,1);
  }
}
