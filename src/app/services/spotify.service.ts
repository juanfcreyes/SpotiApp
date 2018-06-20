import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  
  termino:string = '';
  artitas:any[] = [];
  topTracks:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQBQQ3dsAsHh3-Y16RDj9MWhM2oZ6V2vqkOjcOcebW_gAitKzPCF5JKy-zycm3DiGZ0F10k_x4_A2hBrhv4';

  constructor(public http:HttpClient) { 
    console.log('Servicio de spotity listo');
  }
  
  private getHeaders():HttpHeaders { 
    let headers:HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${ this.token }`
    });
    return headers;
  }
  
  public getArtistas(termino:string) {
    this.termino = termino;
    let url = `${ this.urlSpotify }search?query=${termino}&type=artist&limit=20`;
    return this.http.get(url, { headers: this.getHeaders() }).map( (resp:any) => {
      this.artitas = resp.artists.items;
      return this.artitas;
    });
  }
  
  public getArtista(id:string){
    let url = `${ this.urlSpotify }artists/${id}`;
    console.log(url);
    return this.http.get(url, { headers: this.getHeaders() });
  }
  
  public getTopTrackArtist(id:string){
    let url = `${ this.urlSpotify }artists/${id}/top-tracks?country=US`;
    return this.http.get(url, { headers: this.getHeaders() }).map( (resp:any) => {
      this.topTracks = resp.tracks;
      return this.topTracks;
    });;
  }
  
  public getNewReleases() {
    let url = `${ this.urlSpotify }browse/new-releases`;
    return this.http.get(url, { headers: this.getHeaders()});
    
  }
  
}
