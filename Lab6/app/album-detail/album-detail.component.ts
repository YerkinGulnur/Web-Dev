import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { AlbumService } from '../album.service';
import { Album } from '../models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  newTitle: string;

  constructor(private route: ActivatedRoute,
    private albumService: AlbumService,
    public location: Location) {
    this.album = {} as Album;
    this.loaded = true;
    this.newTitle = '';
  }
  
  ngOnInit(): void {
    this.getAlbumDetails();
  }

  getAlbumDetails() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => { 
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album: Album) => { 
        this.album = album;
        this.loaded = true;
      })
    });
  }

  updateAlbumTitle() {
    this.loaded = false;
    this.album.title = this.newTitle;
    this.albumService.updateAlbumTitle(this.album).subscribe((album: Album) => { 
      this.album = album;
      this.loaded = true;
      this.newTitle = '';
    })
  }
}
