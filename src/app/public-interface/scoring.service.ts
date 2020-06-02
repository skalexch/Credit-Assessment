import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { pub } from './pub';


@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  baseurl= 'http://localhost:8000/'; /*I've just used a random port*/

  constructor(private _http:HttpClient) { }

  postScore(pub: object){
      return this._http.post(`${this.baseurl +"/public-interface"}`, pub)
  }

}