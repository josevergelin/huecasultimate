import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallPageRoutingModule } from './wall-routing.module';

import { WallPage } from './wall.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WallPageRoutingModule,
        HomePageModule
    ],
  declarations: [WallPage]
})
export class WallPageModule {}
