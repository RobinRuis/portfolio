import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'my-work', component: MyWorkComponent },
    {path: 'experience', component: ExperienceComponent}
];
