import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }

  getEpisodes(offset = 0) {
      return this.http.get(`https://breakingbadapi.com/api/episodes?offset=${offset}&limit=25`) 
      //return this.http.get(`https://8100-aefd1589-6ba1-4286-b8b9-26e2ed703837.ws-eu01.gitpod.io/assets/episodes.json`)
  }

  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`) 
      //return this.http.get(`https://8100-aefd1589-6ba1-4286-b8b9-26e2ed703837.ws-eu01.gitpod.io/assets/episodes.json`)
  }

  getCharacters() {
      //return this.http.get(`https://breakingbadapi.com/api/characters`) 
        return this.http.get(`https://8100-aefd1589-6ba1-4286-b8b9-26e2ed703837.ws-eu01.gitpod.io/assets/characters.json`)
  }

  getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`) 
  } 

  getQuotes() {
      return this.http.get(`https://breakingbadapi.com/api/quotes`) 
  }

  getQuote(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`) 
  }   

  getDeaths() {
      return this.http.get(`https://breakingbadapi.com/api/death-count?name=Gustavo+Fring`) 
  }  

  findEpisode(search) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${search}`) 
  }
}
