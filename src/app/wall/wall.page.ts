import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.page.html',
  styleUrls: ['./wall.page.scss'],
})
export class WallPage implements OnInit {

  huecas = [{
    lugar: "Quito",
    title: "El Santo Hornado",
    description: "Descripción del Santo Hornado",
    imageUrl: "images/santo-hornado.jpg"
  },
    {
      lugar: "Guayaquil",
      title: "El Cafe de Tere",
      description: "Descripción del Cafe de Tere",
      imageUrl: "images/cafe-tere.jpg"
    },
    {
      lugar: "Quito",
      title: "Los Hot Dog de la Gonsalez",
      description: "Descripción de los Hot Dog de la Gonsalez",
      imageUrl: "images/hotdog-gonzalez.jpg"
    }]

  constructor() { }

  ngOnInit() {
  }

}
