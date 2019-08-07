import { CareersComponent } from './career/careers/careers.component';
import { EditProfileComponent } from './career/profiles/edit-profile/edit-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SitterSignupComponent } from './authentication/sitter-signup/sitter-signup.component';
import { ProfileSitterComponent } from './career/profiles/profile-sitter/profile-sitter.component';
import { PersonalInfoComponent } from './career/profiles/personal-info/personal-info.component';
import { NotificationsComponent } from './career/profiles/notifications/notifications.component';
import { ReviewsComponent } from './career/profiles/reviews/reviews.component';
import { SettingsComponent } from './career/profiles/settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'career', component: CareersComponent },
  { path: 'career/signup', component: SitterSignupComponent },


  {
    path: 'sitter', component: ProfileSitterComponent, children: [
      {
        path: 'edit-Profile', component: EditProfileComponent
      },
      {
        path: 'personal-info', component: PersonalInfoComponent
      },
      {
        path: 'notifications', component: NotificationsComponent
      },
      {
        path: 'review', component: ReviewsComponent
      },
      {
        path: 'settings', component: SettingsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
