import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NuevahuecaService} from '../nuevahueca.service';
import { AlertController } from '@ionic/angular';
import {Lugar} from '../lugar.model';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss'],
})
export class LugarPage implements OnInit {
  lugar: Lugar;

  constructor(private activatedRoute : ActivatedRoute, private nuevahuecaService: NuevahuecaService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId = paramMap.get('lugarId')
      this.lugar = this.nuevahuecaService.getLugar(recipeId);
      console.log(this.lugar)
    })
  }
   async deleteLugar() {
     const  alertElement = await this.alertCtrl.create({
      header: 'Seguro que desea eliminar',
      message: 'El elemento se eliminara permanentemente',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.nuevahuecaService.deleteLugar(this.lugar.id);
            this.router.navigate(['/nuevahueca'])
          }
        }
      ]
    });
     alertElement.present();
  }
}

