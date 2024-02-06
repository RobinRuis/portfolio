import { Component } from '@angular/core';  
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {



  openMenu(): void {
    const x = document.getElementById("myTopnav");
    if (x?.className === "topnav") {
      x.className += " responsive";
    } else {
      if (x){
        x.className = "topnav";
      }
    }
  }

  closeMenu(): void {
    const x = document.getElementById("myTopnav");
    if (x?.className === "topnav responsive") {
      x.className = "topnav";
    }
  }
}
