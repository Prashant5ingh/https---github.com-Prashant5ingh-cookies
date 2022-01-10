import { Component, OnInit } from '@angular/core';
import { faFilter, faDownload, faSort } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import * as XLSX from 'xlsx';
import { Sensor } from '../sensorData';
import { SharedService } from '../shared.service';
import { Meter } from '../meterreg';
import { MeterregService } from '../meterreg.service';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: Sensor[] = [];

  try: Sensor[] = [];
  m_id: string = ' ';
  companyName: string = ' ';
  Client: any; //searching variable filter
  Reading_Time: any;
  p: number = 1; //pagination variable
  faFilter = faFilter;
  faDownload = faDownload;
  faSort = faSort;
  fileName = "ExcelSheet.xlsx"; //download file 
  data1: Sensor[] = [];
  data2: Sensor[] = [];
  datepicker: boolean = false;
  value:any;
  meter:Meter[]=[];
  show1: boolean = false;
  mySub!: Subscription;

  constructor(private userService: UserService, private shared: SharedService,private meterreg: MeterregService) {
    this.userService.get_companyDrpdwn_data().subscribe((response) => {
      this.data1 = response;
      return this.data1;
    });
  }
  ngOnInit() {

    this.value = JSON.parse(window.sessionStorage.getItem('userdata') || '{}');

    this.meterreg.addMeter(this.value).subscribe((response) => {
      this.meter = response;
      console.log(this.meter);
      return this.meter;
    });
  
    if (this.shared.subsVar3 == undefined) {
      this.shared.subsVar3 = this.shared.invokeupdateFunction.subscribe(() => {
        this.changename();
      });
    }
      
    if (this.shared.subsVar5 == undefined) {
      this.shared.subsVar5 = this.shared.invokegridFunction.subscribe(() => {
        this.addname();
      });
    }

  }

  changename(){
    console.log("calledbygrid1");
    this.ngOnInit();
  }

  addname(){
    console.log("calledbynavbar");
    this.ngOnInit();
  }


  getmeterId(event: any) {
    this.m_id = event.target.value;
    
      this.userService.sendidMeter(this.m_id).subscribe((response) => {
        this.data = response;
        this.data2 = response;
        return this.data;
      });
    

  }
  // this.mySub = interval(1000).subscribe((func=>{
  // })) // code for realtime data in table


  displayAllMeterData() {
    this.companyName = this.value ;
    this.userService.displayAllMeterData(this.companyName).subscribe((response) => {
      this.data = response;
      this.data2 = response;
      return this.data;
    });
  }



  /*-------------timestamp sort-----------*/
  live() {  // code for sorting live
      this.userService.get_liveData(this.m_id).subscribe((response) => {
        this.data = response;
        return this.data;
      });
  }//ends
  minute() {  // code for sorting according to minute
    this.userService.get_minuteData(this.m_id).subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  hour() {  // code for sorting according to hour
    this.userService.get_hourData(this.m_id).subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  day() {  // code for sorting according to day
    this.userService.get_dayData(this.m_id).subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  week() {  // code for sorting according to week
    this.userService.get_weekData(this.m_id).subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends
  month() {  // code for sorting according to month
    this.userService.get_monthData(this.m_id).subscribe((response) => {
      this.data = response;
      return this.data;
    });
  }//ends

  public filters = <any>{
    "to": '',
    "from": '',
  };
  public getByDate(event: any) {
    this.data = this.data2;
    this.filters['from'] = event[0];
    this.filters['to'] = event[1];
    if (this.filters['from'] !== '' && this.filters['to'] !== '') {
      console.log(this.filters['from'], '===', this.filters['to']);
      this.data = this.data.filter(o => { return new Date(o.reading_time) >= new Date(this.filters['from']) && new Date(o.reading_time) <= new Date(this.filters['to']) });
    }
    //return this.data;
  }
 

  /*------search filter code------*/
  // show1: boolean = false;
  // Search1() { //code for filter in company column
  //   if (this.Client == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.data = this.data.filter(res => {
  //       return res.Client.toLocaleLowerCase().match(this.Client.toLocaleLowerCase());
  //     })
  //   }
  // }//ends

  /*---------end---*/

  /*------sorting code start---------*/
  key: string = ''; //sorting variable
  reverse: boolean = false; //sorting variable
  sortClient(key: any) { //sort function asc/desc
    this.key = 'Client';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortVoltage_A(key: any) { //sort function asc/desc
    this.key = 'Voltage_AN';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortVoltage_B(key: any) { //sort function asc/desc
    this.key = 'Voltage_BN';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortVoltage_C(key: any) { //sort function asc/desc
    this.key = 'Voltage_CN';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortVoltage_Avg(key: any) { //sort function asc/desc
    this.key = 'Voltage_Avg';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortFrequency(key: any) { //sort function asc/desc
    this.key = 'Frequency';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortCurrent_A(key: any) { //sort function asc/desc
    this.key = 'Current_A';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortCurrent_B(key: any) { //sort function asc/desc
    this.key = 'Current_B';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortCurrent_C(key: any) { //sort function asc/desc
    this.key = 'Current_C';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortCurrent_Avg(key: any) { //sort function asc/desc
    this.key = 'Current_Avg';
    this.key = key;
    this.reverse = !this.reverse;
  }
  sortActivePower(key: any) { //sort function asc/desc
    this.key = 'Active_Power';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortReactivePower(key: any) { //sort function asc/desc
    this.key = 'Reactive_Power';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortApparentPower(key: any) { //sort function asc/desc
    this.key = 'Apparent_Power';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortPowerFactor(key: any) { //sort function asc/desc
    this.key = 'Power_Factor';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortKWH(key: any) { //sort function asc/desc
    this.key = 'KWH';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortkVARh(key: any) { //sort function asc/desc
    this.key = 'kVARh';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  sortkVAh(key: any) { //sort function asc/desc
    this.key = 'kVAh';
    this.key = key;
    this.reverse = !this.reverse;
  }//end
  /*---------end------*/

  exportexcel(): void { //download function
    let element = this.data;
    // document.getElementById("excel-table")
    //let options:XLSX.JSON2SheetOpts  = {header: ['Name', 'Surname', 'Age']};
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }//ends

  check: boolean = false;
  check1: boolean = false;
  check2: boolean = false;
  //check3: boolean = false;
  check4: boolean = false;
  check5: boolean = false;
  check6: boolean = false;
  checkVA: boolean = false;
  checkVB: boolean = false;
  checkVC: boolean = false;
  checkCA: boolean = false;
  checkCB: boolean = false;
  checkCC: boolean = false;
  checkActive: boolean = false;
  checkReactive: boolean = false;
  checkApparent: boolean = false;
  checkPower: boolean = false;
  showhide() {
    this.check = !this.check;
  }
  showhide1() {
    this.check1 = !this.check1;
  }
  showhide2() {
    this.check2 = !this.check2;
  }
  showhideActive() {
    this.checkActive = !this.checkActive;
  }
  showhide4() {
    this.check4 = !this.check4;
  }
  showhide5() {
    this.check5 = !this.check5;
  }
  showhide6() {
    this.check6 = !this.check6;
  }
  showhideVA() {
    this.checkVA = !this.checkVA;
  }
  showhideVB() {
    this.checkVB = !this.checkVB;
  }
  showhideVC() {
    this.checkVC = !this.checkVC;
  }
  showhideCA() {
    this.checkCA = !this.checkCA;
  }
  showhideCB() {
    this.checkCB = !this.checkCB;
  }
  showhideCC() {
    this.checkCC = !this.checkCC;
  }
  showhideReactive() {
    this.checkReactive = !this.checkReactive;
  }
  showhideApparent() {
    this.checkApparent = !this.checkApparent;
  }
  showhidePower() {
    this.checkPower = !this.checkPower;
  }

}

