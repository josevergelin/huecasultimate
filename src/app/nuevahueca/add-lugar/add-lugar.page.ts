import { Component, OnInit } from '@angular/core';
import {NuevahuecaService} from "../nuevahueca.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-lugar',
  templateUrl: './add-lugar.page.html',
  styleUrls: ['./add-lugar.page.scss'],
})
export class AddLugarPage implements OnInit {

  constructor(private nuevahuecaService: NuevahuecaService, private  router: Router) { }

  ngOnInit() {
  }
saveNewLugar(title: HTMLInputElement, imageURL: HTMLInputElement, comments: HTMLInputElement) {
    this.nuevahuecaService.addLugar(title.value, imageURL.value, comments.value);
    this.router.navigate(['/nuevahueca'])
}
}
