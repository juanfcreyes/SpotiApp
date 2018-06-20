import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinFotoPipe implements PipeTransform {

  transform(imagenes: any [], numeroImagen:number = 1): string {
    let sinFoto = "assets/img/noimage.png";
    if(!imagenes){
      return sinFoto;
    }
    return (imagenes.length > 1) ? imagenes[numeroImagen].url : sinFoto;
  }

}
