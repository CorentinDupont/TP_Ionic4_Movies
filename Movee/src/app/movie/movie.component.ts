import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  public id: number;
  public imdbId: string;
  public title: string;
  public year: number;
  public rated: string;
  public released: string;
  public runtime: string;
  public genre: string;
  public director: string;
  public language: string;
  public country: string;
  public awards: string;
  public production: string;
  public poster: string;
  public plot: string;

  constructor() { }

  ngOnInit() {}

  public static isCorrect(jsonObj){
    // use after scanning qr code
      return(
        jsonObj.hasOwnProperty("title")
        && jsonObj.hasOwnProperty("year")
        && jsonObj.hasOwnProperty("runtime")
      )
  }

}
