import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})

export class EpisodesPage implements OnInit {
    
  episodes: Observable<any>;
  offset = 0;


  constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.loadEpisodes();
  }

  openDetails(episodes) {
      let episodeId = episodes;
      this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
  }

  loadEpisodes(){
      this.episodes = this.api.getEpisodes(this.offset);
      this.episodes.subscribe(data => {console.log('myEpisodes: ',data);
    })
  }

}
