import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'netflix-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public isHomePage() {
    return this.router.url === '/' || this.router.url.indexOf('/search?q=') === 0;
  }

  public isAboutPage() {
    return this.router.url === '/about';    
  }

}
