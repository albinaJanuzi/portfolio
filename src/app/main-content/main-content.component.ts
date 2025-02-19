import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { WhyMeComponent } from './why-me/why-me.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, LandingPageComponent, WhyMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
