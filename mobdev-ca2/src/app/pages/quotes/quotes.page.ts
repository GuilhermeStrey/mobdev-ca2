import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})

export class QuotesPage implements OnInit {

  quotes: Observable<any>;
  offset = 0;


  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.loadQuotes();
  }

  openDetails(quotes) {
    let quotesId = quotes;
    this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
  }

  loadQuotes(){
      this.quotes = this.api.getQuotes(this.offset);
      this.quotes.subscribe(data => {console.log('myQuotes: ',data);
    })
  }
}
