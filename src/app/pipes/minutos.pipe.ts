import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutos'
})
export class MinutosPipe implements PipeTransform {

  transform(duracion:number): string {
    
    let minutos = Math.trunc(duracion / 60000);
    
    let segundos = ((duracion / 60000) - minutos ) * 0.6;
    
    let duracionTotal = minutos + segundos; 
                    
    return duracionTotal.toFixed(2);
  }

}
