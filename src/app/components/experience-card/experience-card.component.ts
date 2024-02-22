import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

  @Input()
  title: String = "";

  @Input()
  description: String = "";
  
  @Input()
  skills: Array<String> = [];

  @Input()
  isLeft: boolean = false;

  @Input()
  image: String = "";


}
