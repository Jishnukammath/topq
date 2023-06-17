import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showMenu:any = false

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
