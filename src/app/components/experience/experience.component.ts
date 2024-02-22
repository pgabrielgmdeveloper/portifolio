import { Component, OnInit } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Array<Experience> = []; 

  ngOnInit(): void {
    this.experiences = [
      {
        description: "Desenvolvimento APIs que fomentam uma cadeia de micro serviços utilizando python, Clean Arachiteture, Docker, Kubernets, AWS e soluções de cacche",
        img: "dasdasdasdad",
        skills: ["Python", "Go", "Kubernets", "Docker", "AWS","Jenkins", "tarara"],
        title: "Desenvolvedor"
      },
      {
        description: "Desenvolvimento APIs que fomentam uma cadeia de micro serviços utilizando python, Clean Arachiteture, Docker, Kubernets, AWS e soluções de cacche",
        img: "dasdasdasdad",
        skills: ["Python", "Go", "Kubernets", "Docker", "AWS"],
        title: "Desenvolvedor"
      },
      {
        description: "Desenvolvimento APIs que fomentam uma cadeia de micro serviços utilizando python, Clean Arachiteture, Docker, Kubernets, AWS e soluções de cacche",
        img: "dasdasdasdad",
        skills: ["Python", "Go", "Kubernets", "Docker", "AWS"],
        title: "Desenvolvedor"
      },
      {
        description: "Desenvolvimento APIs que fomentam uma cadeia de micro serviços utilizando python, Clean Arachiteture, Docker, Kubernets, AWS e soluções de cacche",
        img: "dasdasdasdad",
        skills: ["Python", "Go", "Kubernets", "Docker", "AWS"],
        title: "Desenvolvedor"
      },
      {
        description: "Desenvolvimento APIs que fomentam uma cadeia de micro serviços utilizando python, Clean Arachiteture, Docker, Kubernets, AWS e soluções de cacche",
        img: "dasdasdasdad",
        skills: ["Python", "Go", "Kubernets", "Docker", "AWS"],
        title: "Desenvolvedor"
      }
    ]
    console.log(this.experiences)
  }
}
