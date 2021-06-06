import { Injectable } from '@angular/core';
import { Lugar } from './lugar.model';


@Injectable({
  providedIn: 'root'
})
export class NuevahuecaService {
  private nuevahueca: Lugar[] = [
    {
      id: '1',
      title: 'Chambo',
      imageURL: 'https://img.goraymi.com/2020/05/14/aa4d2f30e1f0b1886a8f344f75aa95db_sl.jpg',
      comments: ['Lugar asombrosoo', 'paisaje unico'],
    },
    {
      id: '2',
      title: 'Chimborazo',
      imageURL: 'https://elpais.com/elpais/imagenes/2016/04/06/ciencia/1459968044_919086_1460016482_noticia_fotograma.jpg',
      comments: ['Lugar mágico', 'Experiencias asombrosas']
    },
    {
      id: '3',
      title: 'Cubillines',
      imageURL: 'https://elpais.com/elpais/imagenes/2016/04/06/ciencia/1459968044_919086_1460016482_noticia_fotograma.jpg',
      comments: [],
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
