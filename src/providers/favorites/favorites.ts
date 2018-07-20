import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesProvider {

  constructor(public http: HttpClient) {
  }

  getAll() {
    return new Promise((resolve, reject) => {
      if(localStorage.hasOwnProperty("favorites")) {
        resolve(JSON.parse(localStorage.getItem("favorites")));
      } else {
        reject({status: "not_found"});
      }
    });
  }

  add(favorite: any) {
    if(localStorage.hasOwnProperty("favorites")) {
      let favorites = JSON.parse(localStorage.getItem("favorites"));
      if(favorites.length > 0) {
        favorites.forEach((element, key) => {
          if(element.id != favorite.id) {
            favorites.push(favorite);
            localStorage.setItem("favorites", JSON.stringify(favorites));
          } else {
            favorites.splice(key, 1);
            console.log(key);
            localStorage.setItem("favorites", JSON.stringify(favorites));
          }
        });
      } else {
        favorites.push(favorite);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    } else {
      let arr = [];
      arr.push(favorite);
      localStorage.setItem("favorites", JSON.stringify(arr));
    }
  }

}
