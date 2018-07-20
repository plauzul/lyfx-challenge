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

  get(favorite: any) {
    return new Promise((resolve, reject) => {
      if(localStorage.hasOwnProperty("favorites")) {
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        favorites.forEach((element, key) => {
          if(element.id == favorite.id) {
            resolve(element);
          }
        });
      } else {
        reject({status: "not_found"});
      }
    });
  }

  add(favorite: any) {
    if(localStorage.hasOwnProperty("favorites")) {
      let favorites = JSON.parse(localStorage.getItem("favorites"));
      favorites.push(favorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      let arr = [];
      arr.push(favorite);
      localStorage.setItem("favorites", JSON.stringify(arr));
    }
  }

  remove(favorite: any) {
    console.log(favorite);
    if(localStorage.hasOwnProperty("favorites")) {
      let favorites = JSON.parse(localStorage.getItem("favorites"));
      favorites.forEach((element, key) => {
        if(element.id == favorite.id) {
          favorites.splice(key, 1);
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }
      });
    }
  }

}
