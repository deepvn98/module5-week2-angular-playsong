import { Component, OnInit } from '@angular/core';
import {SongsvService} from "../service/songsv.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-playsong',
  templateUrl: './playsong.component.html',
  styleUrls: ['./playsong.component.scss']
})
export class PlaysongComponent implements OnInit {
id:any;
song:any;
  constructor(
    private songsv:SongsvService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,

  ) {
    this.activatedRoute.paramMap.subscribe((paraMap:ParamMap)=>{
      this.id = paraMap.get('id');
      this.song = this.songsv.findSongId(this.id);
    })
  }

  ngOnInit(): void {
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
