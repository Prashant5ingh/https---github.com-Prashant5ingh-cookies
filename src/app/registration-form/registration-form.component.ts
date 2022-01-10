import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validators';
import { UniqueCompanynameValidator } from '../unique-companyname-validator.directive';
import { UniqueEmailValidator} from '../unique-email-validator.directive';
import { MustMatch } from './match.validator';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
   // <!-- Property declaration -->
fieldTextType: boolean | any;
fieldTextType1: boolean | any;
public registerForm : FormGroup | any;

// <!-- Switching method -->
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
toggleFieldTextType1() {
  this.fieldTextType1 = !this.fieldTextType1;
}
  invalidRegistration: boolean = false;
  show: boolean = false;
  otp = 0;

  constructor(private fb: FormBuilder,private nameService: NameService, private router: Router) { 
  }
//This is ngONInit
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      TempID: [''],
      CompanyName: new FormControl('', Validators.required, UniqueCompanynameValidator(this.nameService)),
      Name: new FormControl('', Validators.required),
      Designation: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email], UniqueEmailValidator(this.nameService)),
      MobileNo: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      ColdStorage: new FormControl(''),
      Energy: new FormControl(''),
      Password: new FormControl ('', [Validators.required, Validators.minLength(6),Validators.pattern("(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]),
      ConfirmPassword: new FormControl ('', Validators.required),
      OTP: new FormControl('', Validators.required),
  }, {
      validator: MustMatch('Password', 'ConfirmPassword')
  });
  }

  // validators() {
  //   ConfirmedValidator(this.registerForm.controls.Password.value, this.registerForm.controls.ConfirmPassword.value);
  // }
  //send form details to backend and move to otp component
  registerCompany() {
    this.nameService.registerCompany(this.registerForm.value).subscribe((response) => {

      this.invalidRegistration = true;
      if (this.registerForm.controls.Password.value == this.registerForm.controls.ConfirmPassword.value) {
        this.router.navigateByUrl('otp');
      } else {
        alert('password does not match');
      }

    },
      (error) => {
        alert('Invalid OTP');
      }
    );
  }
  get f() { return this.registerForm.controls };

  sendOTP() {
    this.show = true;
    console.log(this.registerForm.value.Email);

    this.nameService.sendOTP(this.registerForm.value.Email).subscribe((response) => {
      console.log(response);
      alert("OTP sent successfully");
    });
  }
}