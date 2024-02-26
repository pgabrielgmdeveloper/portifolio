import { Component, OnInit, Renderer2 } from '@angular/core';
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
export class ProjectsComponent implements OnInit {

  projects: Array<Project> = []
  images!: Array<string>;
  screenWith!: number
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
    this.projects = [
      {
        id:"1",
        description: "Projeto de banco virtual para a EBD(Escola biblica dominical) onde os alunos podem receber saldo e fazer transações entre eles podendo comprar ou vender produtos na EBD com o saldo disponivel",
        img: "../../../assets/ebbank.png",
        skills: ["Python", "FastApi", "Jinja2", "Docker", "MongoDB"],
        title: "EbBank",
        isActive: true,
        status: "concluido"
      },
      {
        id:"2",
        description: "Projeto portifolio online usado para mostrar as experiencias profissionais e experiencias na area de tecnologia assim como o meu contato",
        img: "../../../assets/portifolio.png",
        skills: ["HTML", "CSS", "javasacript", "Angular", "Docker"],
        title: "Portifolio Online",
        isActive: true,
        status: "concluido"
      },
      {
        id: "3",
        description: "API de Autenticação e Authorização, nele é posssivel criar um produto(API) e adicionar usuarios com permissoes de criação, deleção, atualização e leitura. Assim é possivel gerenciar o Nivel de Acesso de cada usuario em cada produto(API) diferente",
        img: "../../../assets/AUTHH.jpg",
        skills: ["C#", "dotnet", "SQL", "Angular", "Docker"],
        title: "Auth API",
        isActive: true,
        status: "concluido"
      }
    ]
    this.images = this.projects.map(project => project.img); 
  }
  ngOnInit(): void {
    
    this.screenWith = window.innerWidth;
    console.log(this.screenWith)
  }

}
