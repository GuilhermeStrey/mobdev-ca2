import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }

  getEpisodes(offset) {
      return this.http.get(`https://breakingbadapi.com/api/episodes`) 
      //return this.http.get(`https://8100-aefd1589-6ba1-4286-b8b9-26e2ed703837.ws-eu01.gitpod.io/assets/episodes.json`)
  }

  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`) 
      //return this.http.get(`https://8100-aefd1589-6ba1-4286-b8b9-26e2ed703837.ws-eu01.gitpod.io/assets/episodes.json`)
  }

  getCharacters(offset) {
      return this.http.get(`https://breakingbadapi.com/api/characters?limit=25&offset=${offset}`) 
      //return this.http.get(`https://8100-aefd1589-6ba1-4286-b8b9-26e2ed703837.ws-eu01.gitpod.io/assets/characters.json`)
  }

  getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`) 
  } 

  getQuotes(offset) {
      return this.http.get(`https://breakingbadapi.com/api/quotes`) 
  }

  getQuote(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`) 
  }   

  getDeaths(offset) {
      return this.http.get(`https://breakingbadapi.com/api/deaths`) 
  }

  findEpisode(search) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${search}`) 
  }
}
