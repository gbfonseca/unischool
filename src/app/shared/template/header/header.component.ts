import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: Array<string>;
  isProfessor = false;
  constructor(
    private router: Router
  ) {
    this.url = router.url.split('/');
  }

  ngOnInit(): void {
    this.checkUrl(this.url);
  }

  checkUrl(url) {
    if (url[1] === 'professor') {
      this.isProfessor = true;
    }
  }

}
