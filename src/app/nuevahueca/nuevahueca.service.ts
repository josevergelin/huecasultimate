import { Injectable } from '@angular/core';
import { Lugar } from './lugar.model';


@Injectable({
  providedIn: 'root'
})
export class NuevahuecaService {
  private nuevahueca: Lugar[] = [
     {
      id: '1',
      title: 'RIOBAMBA',
      imageURL: 'https://goecuador.net/archivos/blogs/hornado-riobamba.jpg',
      comments: ['Lugar del mejor Hornado', 'El mejor sabor'],
    },
    {
      id: '2',
      title: 'AMBATO',
      imageURL: 'https://media-cdn.tripadvisor.com/media/photo-s/06/00/06/00/las-gallinas-de-pinllo.jpg',
      comments: ['Gastronomia y tradición', 'la mejores gallinas de Pinllo']
    },
    {
      id: '3',
      title: 'LATACUNGA',
      imageURL: 'https://www.nanmagazine.com/wp-content/uploads/2017/04/feat_25_b_bn.jpg',
      comments: ['las mejores chucchucaras', 'latacunga vive la gastronomía'],
    }
  ]


  constructor() { }

  getNuevahueca(){
    return [...this.nuevahueca]
  }

  getLugar(lugarId: string){
    return {
      ...this.nuevahueca.find(lugar => {
        return lugar.id === lugarId
      })
    }
  }

  addLugar(title: string, imageURL: string, comments: string) {
    this.nuevahueca.push({
      title,
      imageURL,
      comments:[comments],
      id: this.nuevahueca.length + 1 + ""
    });
  }

  deleteLugar(lugarId: string) {
    this.nuevahueca = this.nuevahueca.filter(lugar => {
      return lugar.id !== lugarId
    });
  }
}
