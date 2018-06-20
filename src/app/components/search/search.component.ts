import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  
  termino:string = '';

  constructor(public _spotifyService:SpotifyService) { 
    this.termino = _spotifyService.termino;
  }
  
  buscarArtista(){
    if(this.termino.length == 0){
      return;
    }
    this._spotifyService.getArtistas(this.termino).subscribe( (aristas) =>{
      console.log(aristas); 
    });
    
  }

}

