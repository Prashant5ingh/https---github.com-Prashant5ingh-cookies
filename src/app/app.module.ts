import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MininavComponent } from './mininav/mininav.component';
import { OverviewComponent } from './overview/overview.component';
import { DataComponent } from './data/data.component';
import { TableComponent } from './table/table.component';
import { NameService } from './name.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { UniqueMeternameValidatorDirective } from './unique-metername-validator.directive';
import { UniqueCompanynameValidatorDirective } from './unique-companyname-validator.directive';
import { UniqueEmailValidatorDirective } from './unique-email-validator.directive';
import { LoaderService } from './services/loader.service';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavbarComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    MininavComponent,
    OverviewComponent,
    DataComponent,
    TableComponent,
    RegistrationFormComponent,
    LoginComponent,
    ResetPasswordComponent,
    OtpComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    DialogboxComponent,
    UniqueMeternameValidatorDirective,
    UniqueCompanynameValidatorDirective,
    UniqueEmailValidatorDirective
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule

  ],

  providers: [NameService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
