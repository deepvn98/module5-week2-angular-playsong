import { Component, OnInit } from '@angular/core';
import {Isong} from "../isong";
import {SongsvService} from "../service/songsv.service";

@Component({
  selector: 'app-displaysong',
  templateUrl: './displaysong.component.html',
  styleUrls: ['./displaysong.component.scss']
})
export class DisplaysongComponent implements OnInit {
  songscomponent:Isong[]=[];

  constructor(private songsv:SongsvService ) {
    this.songscomponent = this.songsv.songs;
  }

  ngOnInit(): void {
  }

}
