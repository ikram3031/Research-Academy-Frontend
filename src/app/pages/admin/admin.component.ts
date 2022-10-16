import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})

export class AdminComponent implements OnInit {

  // Varialbles
  public showAuthors:boolean = false;
  public showUsers:boolean = false;
  public showPapers:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit(): void {

  }


  // ROuter Outlet
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab']
      if (!tab) return 'secondary'
      return tab
    }
  }

  // Toggle Nav menu
  toggleAuthors() {
    this.showAuthors = !this.showAuthors;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showAuthors)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showUsers)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  togglePapers() {
    this.showPapers = !this.showPapers;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showPapers)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
