import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as common from './baseurl';
import { Sensor } from './sensorData';
@Injectable({
  providedIn: 'root'
})
export class CardService {
 
constructor(private httpClient: HttpClient) { }

get_meterCardData(value:string) {
    // return this.httpClient.get<Emp[]>(common.baseURL + '/card.php');
    return this.httpClient.get<Sensor[]>(common.endpoint+'/Meter_Carddata.php?value='+value);
}
get_meterAccordianData(value:string) {
  // return this.httpClient.get<Emp[]>(common.baseURL + '/card.php');
  return this.httpClient.get<Sensor[]>(common.endpoint+'/Meter_Carddata.php?value='+value);
}

}
