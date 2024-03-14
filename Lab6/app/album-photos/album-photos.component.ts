import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { AlbumService } from '../album.service';
import { Photo } from '../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService, public location: Location) {
    this.photos = [];
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.route.paramMap.subscribe((params: ParamMap) => { 
      const id: number = Number(params.get('id')); 
      this.albumService.getPhotos(id).subscribe((photos: Photo[]) => { 
        this.photos = photos;
      });
    });
  }
}
