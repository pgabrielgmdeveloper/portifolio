import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { HeaderComponent } from '../../components/header/header.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceComponent, HeaderComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [NgbCarouselConfig]

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
