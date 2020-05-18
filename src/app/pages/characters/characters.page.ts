import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})

export class CharactersPage implements OnInit {

  characters: Observable<any>;
  offset = 0;


  constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.loadCharacters();
  }

  openDetails(characters) {
      let characterId = characters;
      this.router.navigateByUrl(`/tabs/characters/${characterId}`);
  }

  loadCharacters(){
      this.characters = this.api.getCharacters(this.offset);
      this.characters.subscribe(data => {console.log('myCharacters: ',data);
    })
  }
}
