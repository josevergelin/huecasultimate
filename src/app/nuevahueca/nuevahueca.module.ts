import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevahuecaPageRoutingModule } from './nuevahueca-routing.module';

import { NuevahuecaPage } from './nuevahueca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevahuecaPageRoutingModule
  ],
  declarations: [NuevahuecaPage]
})
export class NuevahuecaPageModule {}
