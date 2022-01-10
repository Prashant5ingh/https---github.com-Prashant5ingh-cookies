import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  invoketableFunction = new EventEmitter(); 
  invokeaccordianFunction = new EventEmitter(); 
  invokegridFunction = new EventEmitter(); 
  invokeupdateFunction = new EventEmitter(); 
  sendCompanyName:any;
  sendLoginArray:any;
  subsVar!: Subscription;
  subsVar1!: Subscription;
  subsVar2!: Subscription;
  subsVar3!: Subscription;
  subsVar4!: Subscription;
  subsVar5!: Subscription;

  onOverviewClick(meterid:string) {   
    console.log("overview run",meterid); 
    this.invoketableFunction.emit(meterid);  
    console.log("accordian run",meterid);   
    this.invokeaccordianFunction.emit(meterid);
  } 
  // onAccordianClick(meterid:string) { 
  //   console.log("accordian run",meterid);   
  //   this.invokeaccordianFunction.emit(meterid);   
  // } 
  onLoginArray(data:[]){
    this.sendLoginArray = data;
    return this.sendLoginArray;
  }
  onClickupdate(){
    this.invokegridFunction.emit(); 
  }
  onClickregister(){
    this.invokeupdateFunction.emit(); 
  }
  
}
