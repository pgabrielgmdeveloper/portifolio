import { Component } from '@angular/core';
import { NgbModule,NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgbModule, NgbCarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers: [NgbCarouselConfig]
})
export class ProjectsComponent {

  projects: Array<Project> = []
  images!: Array<string>;
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
    this.projects = [
      {
        id:"1",
        description: "Desenvolvimento APIs que fomentam uma cadeia de micro serviços utilizando python, Clean Arachiteture, Docker, Kubernets, AWS e soluções de cacche",
        img: "../../../assets/serasaLogo.png",
        skills: ["Python", "Go", "Kubernets", "Docker", "AWS","Jenkins", "tarara"],
        title: "Desenvolvedor",
        isActive: true
      },
      {
        id:"2",
        description: "Desenvolvimento APIs que fomentam uma cadeia de micro serviços utilizando python, Clean Arachiteture, Docker, Kubernets, AWS e soluções de cacche",
        img: "../../../assets/PAULO.jpg",
        skills: ["Python", "Go", "Kubernets", "Docker", "AWS","Jenkins", "tarara"],
        title: "Desenvolvedor",
        isActive: true
      },
    ]
    this.images = this.projects.map(project => project.img); 
  }

}
