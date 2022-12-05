import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-fiche-morceau',
  templateUrl: './fiche-morceau.component.html',
  styleUrls: ['./fiche-morceau.component.css'],
})
export class FicheMorceauComponent implements OnInit {
  @Input() album: Album;
  src = '';

  constructor(private api: ApiService) {}

  change(isEnter: boolean) {
    if (!isEnter) {
      this.src = this.album.album.cover;
    } else {
      this.src = this.album.artist.picture;
    }
  }

  ngOnInit() {
    this.src = this.album.album.cover;
  }
}
