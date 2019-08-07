import { CareersComponent } from './careers/careers.component';
import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
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
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { SettingsComponent } from './profiles/settings/settings.component';
import { SideNavComponent } from './profiles/side-nav/side-nav.component';





@NgModule({
  declarations: [
    EditProfileComponent,
    NotificationsComponent,
    PersonalInfoComponent,
    ProfileSitterComponent,
    ReviewsComponent,
    SettingsComponent,
    SideNavComponent,
    CareersComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CommonModule,
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
  ]
})
export class CareerModule { }
