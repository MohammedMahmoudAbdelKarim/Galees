import { AuthService } from './shared/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Import Angular Material 

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  // MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialog,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { MatOptionModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
// import { CareersComponent } from './career/careers/careers.component';
import { SearchPipe } from './shared/services/search.pipe';
import { CareerRoutingModule } from './career-routing.module';
import { SitterSignupComponent } from './authentication/sitter-signup/sitter-signup.component';
import { CareerModule } from './career/careers.module';
import { AboutComponent } from './shared/about/about.component';
import { HomeComponent } from './shared/home/home.component';
import { ClientSignupComponent } from './authentication/client-signup/client-signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { FindBabySitterComponent } from './profile/findBabySitter/findBabySitter.component';
import { TermsComponent } from './shared/terms/terms.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SubscribeComponent } from './shared/subscribe/subscribe.component';
import { UserSettingsComponent } from './shared/user-settings/user-settings.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SubmitPasswordComponent } from './submit-password/submit-password.component';
import { EmailSendComponent } from './email-send/email-send.component';
import { UserHistoryComponent } from './user-history/user-history.component';


@NgModule({
  declarations: [
    AppComponent,
    SitterSignupComponent,
    HomeComponent,
    ProfileDetailsComponent,
    FindBabySitterComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SubscribeComponent,
    AboutComponent,
    ClientSignupComponent,
    OrderComponent,
    SearchPipe,
    TermsComponent,
    ContactUsComponent,
    UserProfileComponent,
    UserSettingsComponent,
    ResetPasswordComponent,
    SubmitPasswordComponent,
    EmailSendComponent,
    UserHistoryComponent,
  ],
  imports: [
    CareerRoutingModule,
    MatDialogModule,
    CareerModule,
    NgxPaginationModule,
    OwlModule,
    NgbModule,
    Ng5SliderModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatOptionModule,
    AngularFontAwesomeModule,
    BrowserModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    NgbModule,
    CareerRoutingModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbDropdownModule,
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [OrderComponent]
})
export class AppModule { }
