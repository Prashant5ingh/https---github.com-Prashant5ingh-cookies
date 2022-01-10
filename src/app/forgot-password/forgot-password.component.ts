import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NameService } from '../name.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  invalidForgot: boolean = false;
  forgotpasswordForm = new FormGroup({
    CompanyName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private nameService: NameService, private router: Router) { }

  ngOnInit(): void {
  }
  changePassword() {
    var req = {
      "Email": this.forgotpasswordForm.value.Email
    }
    this.nameService.changePassword(req).subscribe((link) => {
      alert('please check your mail to reset password');
    });
    this.invalidForgot = true;
    

  }

}
