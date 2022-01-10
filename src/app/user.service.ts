import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as common from './baseurl'
import { Sensor } from './sensorData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  sendidMeter(m_id: string){
    console.log(m_id);
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Tabledata-MeterId.php?m_id='+m_id);
  }
  // insertdata(m_id: string){
  //   console.log(m_id);
  //   return this.httpClient.get<Sensor[]>(common.endpoint1+'/InsertData.php?m_id='+m_id);
  // }

  displayAllMeterData(companyName:string){
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Tabledata-Company.php?companyName='+companyName);
  }
  get_liveData(m_id: string) {
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Timestampsort_Live.php?m_id='+m_id);
  }
  get_minuteData(m_id: string) {
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Timestampsort_Minute.php?m_id='+m_id);
  }
  get_hourData(m_id: string) {
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Timestampsort_Hour.php?m_id='+m_id);
  }
  get_dayData(m_id: string) {
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Timestampsort_Day.php?m_id='+m_id);
  }
  get_weekData(m_id: string) {
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Timestampsort_Week.php?m_id='+m_id);
  }
  get_monthData(m_id: string) {
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Timestampsort_Month.php?m_id='+m_id);
  }
  get_companyDrpdwn_data() {
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Filter_company.php');
  }
}
