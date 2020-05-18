import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {  }

  getEpisodes(offset) {
      return this.http.get(`https://breakingbadapi.com/api/episodes`) 
  }

  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`) 
  }

  getCharacters(offset) {
      return this.http.get(`https://breakingbadapi.com/api/characters?limit=100&offset=${offset}`) 
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
