import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Meter } from './meterreg';
import * as common from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class MeterregService {

  constructor(private httpClient: HttpClient) {}
  getMeters(){
    return this.httpClient.get<Meter[]>(common.endpoint +'/Get_meter.php').pipe(
      map( Meter => {
        const newMeter = [];
        for(let meter of Meter){
          const meterName = meter.meterName;
          newMeter.push({meterName: meterName});
        }
        return newMeter;
      }),
      tap(Meter => console.log(Meter))
    );
  }

  getMeterByMetername(meterName:string){
    return this.httpClient.get<Meter[]>(common.endpoint +'/Unique_MeterName.php?meterName='+meterName);

  }
  meterRegistration(meterDetails: Meter): Observable<Meter> {
    return this.httpClient.post<Meter>(common.endpoint +'/Registration_meter.php', meterDetails);
  }
  addMeter(value:string) {
    return this.httpClient.get<Meter[]>(common.endpoint +'/Display_meter.php?value='+value);
  }
  deleteMeter(id: number){
    return this.httpClient.delete<Meter>(common.endpoint +'/Delete_meter.php?id='+id);
  }

  get_meterData(id:number) {
    return this.httpClient.get<Meter[]>(common.endpoint +'/Display_Meterdetails.php?id='+id);
  }
  meterUpdate(meterupdateDetails:Meter): Observable<Meter>{
    return this.httpClient.post<Meter>(common.endpoint +'/Meter_DetailsUpdate.php', meterupdateDetails);
  }
  meterUpdate1(meterupdateDetails:Meter): Observable<Meter>{
    return this.httpClient.post<Meter>(common.endpoint +'/Meter_DetailsUpdate1.php', meterupdateDetails);
  }
}
