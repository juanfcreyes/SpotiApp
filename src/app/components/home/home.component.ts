import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private releases: any[] = [];
  constructor(private _sps:SpotifyService ) { }

  ngOnInit() {
    this._sps.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.releases = data.albums.items;
    });;
  }

}
