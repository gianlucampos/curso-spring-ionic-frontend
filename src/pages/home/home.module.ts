import {NgModule} from "@angular/core";
import {HomePage} from './home';
import {IonicPageModule} from 'ionic-angular/module';

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule {
}
