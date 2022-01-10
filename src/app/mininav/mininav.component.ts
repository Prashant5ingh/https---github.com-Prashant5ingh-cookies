import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-mininav',
  templateUrl: './mininav.component.html',
  styleUrls: ['./mininav.component.css']
})
export class MininavComponent implements OnInit {
value:any;
decide2:any;
showModal1: boolean|any;
  showModal2: boolean|any;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');
    this.decide2=JSON.parse(window.sessionStorage.getItem('length')||'{}');
  }
  logclick(){
    if(this.decide2==0){
      this.showModal1 = true;
     
    }else if(this.decide2>0){
      this.showModal2 = true;
     
    }
  }
  hide1()
  { 
    this.showModal1 = false;
  }
  hide2()
  { 
    this.showModal2 = false;
  }

}
