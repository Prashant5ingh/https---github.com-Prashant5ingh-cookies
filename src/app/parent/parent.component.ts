
import { Component, OnInit } from '@angular/core';
import { Meter } from '../meterreg';
import { MeterregService } from '../meterreg.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value:any;
  meter: Meter[]=[];
  constructor(private shared:SharedService,private meterreg: MeterregService){}
  ngOnInit() {
    this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');
    this.meterreg.addMeter(this.value).subscribe((response) => {
      this.meter = response;
      window.sessionStorage.setItem('length',JSON.stringify(this.meter.length));
      this.decide1=JSON.parse(window.sessionStorage.getItem('modalwork')||'{}');
      this.decide2=JSON.parse(window.sessionStorage.getItem('length')||'{}');
      this.logclick();  
      return this.meter;
    });  

    
  }

  logclick(){
    if(this.decide1=="in" && this.decide2==0){
      this.showModal1 = true;
     
    }else if(this.decide1=="in" && this.decide2>0){
      this.showModal2 = true;
     
    }
  }
  
  showModal1: boolean|any;
  showModal2: boolean|any;
  decide1:any;
  decide2:any;
 
  hide1()
  { 
    this.showModal1 = false;
  }
  hide2()
  { 
    this.showModal2 = false;
  }
}
