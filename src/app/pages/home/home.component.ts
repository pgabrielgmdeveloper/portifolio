import { Component, OnInit } from '@angular/core';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { Experience } from '../../models/experience.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceCardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  experiences: Array<Experience> = []; 

  ngOnInit(): void {
    this.experiences = [
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
