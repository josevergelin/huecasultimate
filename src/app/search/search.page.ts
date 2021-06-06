import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

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
      lugar: "Riobamba",
      title: "El Cafe de Riobamba",
      description: "Descripción del Cafe de Riobamba",
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
