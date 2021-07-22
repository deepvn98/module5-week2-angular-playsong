import { Injectable } from '@angular/core';
import {Isong} from "../isong";

@Injectable({
  providedIn: 'root'
})
export class SongsvService {
  songs:Isong[]=[];
  song1: Isong={
    id:'PMVEF-SDv4g',
    name:'Back To Life'
  };
  song2: Isong={
    id:'jTyVIYGbQwU',
    name:'Liar'
  };
  song3: Isong={
    id:'py60E_EvlcY',
    name:'Love The Way you life'
  }

  constructor() {
    this.songs.push(this.song1,this.song2,this.song3)
  }

  findSongId(id:String){
    return this.songs.find(item=>item.id ===id);

  }
}
