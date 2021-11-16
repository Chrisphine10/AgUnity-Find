import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageShellModule } from '@agunity/components';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { OrderListModule } from '@agunity/components';
import { MapPageRoutingModule } from './map-routing.module';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { MapPage } from './map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    ReactiveFormsModule,
		TranslateModule,
		ImageShellModule,
		OrderListModule,
  ],
  declarations: [MapPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [MapPage],

})

export class MapPageModule {
	constructor() {
		console.log('MapPageModule constructor');
	}
}
export * from './map.page';
