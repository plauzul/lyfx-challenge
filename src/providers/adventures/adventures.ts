import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AdventuresProvider {

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get(`https://firebase.lyfx.co/adventures-lab`);
  }

}
