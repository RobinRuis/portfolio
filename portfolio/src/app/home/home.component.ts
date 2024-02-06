import { Component, HostBinding } from '@angular/core';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {MatButtonModule} from '@angular/material/button';
import { routeAnimationsState } from '../route-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [routeAnimationsState]
})
export class HomeComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation= true;
}
