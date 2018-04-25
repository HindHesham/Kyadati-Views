import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUsPage } from './about-us';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
  declarations: [
    AboutUsPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutUsPage),
    CustomIconsModule
  ],
})
export class AboutUsPageModule {}
