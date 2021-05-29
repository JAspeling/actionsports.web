import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MapsRoutes} from './maps.routing';

import {FullScreenMapsComponent} from './fullscreenmap/fullscreenmap.component';
import {GoogleMapsComponent} from './googlemaps/googlemaps.component';
import {VectorMapsComponent} from './vectormaps/vectormaps.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    FormsModule
  ],
  declarations: [
      FullScreenMapsComponent,
      GoogleMapsComponent,
      VectorMapsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MapsModule {}
