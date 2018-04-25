import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileDetailsPage } from './profile-details';
import {CustomIconsModule} from 'ionic2-custom-icons';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    ProfileDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileDetailsPage),
    CustomIconsModule,
    Ionic2RatingModule
  ],
})
export class ProfileDetailsPageModule {}
