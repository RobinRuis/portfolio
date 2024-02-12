import { Component, HostBinding, Input } from '@angular/core';
import { routeAnimationsState } from '../route-animations';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [MatChipsModule, CommonModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.css',
  animations: [routeAnimationsState]
})
export class MyWorkComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  items = [
    { value: 'C#', selected: false }, 
    { value: 'Angular', selected: false }, 
    { value: 'ASP .NET', selected: false }, 
    { value: 'SQL', selected: false }, 
    { value: 'TypeScript', selected: false }, 
    { value: 'HTML', selected: false }, 
    { value: 'CSS', selected: false }
  ];

  projects = [
    { title: 'Deze portfolio website', description: 'description1', img: 'portfolio', techniques: ['Angular', 'TypeScript', 'HTML', 'CSS' ], link: '' },
    { title: 'News On This Date', description: 'description2', img: 'newsOnThisDate', techniques: ['ASP .NET', 'C#'], link: 'https://newsonthisdateserver.azurewebsites.net/' }
  ];

  filteredProjects: any[];

  constructor() {
    this.filteredProjects = this.projects;
  }

  toggleChip(item: any) {
    item.selected = !item.selected;

    if (item.selected) {
      this.selectedChips.push(item);
    } else {
      const index = this.selectedChips.findIndex(chip => chip.value === item.value);
      this.selectedChips.splice(index, 1);
    }

    this.filterProjects();
  }

  selectedChips: any[] = [];

  filterProjects() {
    if (this.selectedChips.length === 0) {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => {
        return this.selectedChips.every(chip => project.techniques.includes(chip.value));
      });
    }
  }
}

