import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})

export class DeathsPage implements OnInit {

  deaths: Observable<any>;
  offset = 0;


  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.loadDeaths();
  }

  openDetails(deaths) {
    let deathId = deaths;
    this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
  }

  loadDeaths(){
      this.deaths = this.api.getDeaths(this.offset);
      this.deaths.subscribe(data => {console.log('myDeaths: ',data);
    })
  }
}