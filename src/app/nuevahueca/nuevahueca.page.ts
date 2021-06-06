import { Component, OnInit } from '@angular/core';
import  { NuevahuecaService } from './nuevahueca.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nuevahueca',
  templateUrl: './nuevahueca.page.html',
  styleUrls: ['./nuevahueca.page.scss'],
})
export class NuevahuecaPage implements OnInit {
  nuevahueca = []

  constructor(private lugarService: NuevahuecaService, private router: Router ) { }

  ngOnInit() {
   this.nuevahueca = this.lugarService.getNuevahueca();
  }
ionViewWillEnter() {
   this.nuevahueca = this.lugarService.getNuevahueca();
}
addNewLugar() {
      this.router.navigate(['/nuevolugar']);
}
goToHome() {
      this.router.navigate(['/home'])
}
}
