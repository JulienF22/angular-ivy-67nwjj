import { Component, VERSION } from '@angular/core';
import { Album } from './album';
import { ApiService } from './services/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchText = '';

  list: {
    id: number;
    title: 'string';
  }[];

  albums: Album[] = [];

  constructor(private api: ApiService) {}

  getMorceau(l: { id: number; title: 'string' }) {
    console.log(l);
    this.api.getMorceau(l.id).subscribe({
      next: (data) => {
        console.log(data);
        //this.list = data;
        this.albums.push(data);
        this.list = [];
      },
    });
  }

  search() {
    this.api.search(this.searchText).subscribe({
      next: (data) => {
        console.log(data);
        this.list = data;
      },
    });
  }
}
