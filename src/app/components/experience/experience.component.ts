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
        description: "Integração com APIs no ramo de renegociações de dividas tanto SOAP quanto REST, sempre  utilizando boas praticas de programação, Trabalho com uma estrutura de micro serviços, principalmente em Python com FastAPI e GO, utilização de AWS (s3, ec2, rds, sqs, lambda), Docker e Kubernetes, refinamento de novos projetos",
        img: "../../../assets/serasaLogo.png",
        skills: ["Python", "Kubernets", "Docker","AWS","Jenkins", "go", "Arquitetura Limpa",    "splunk", "datadog", "redis", "SQL", "filas SQS"],
        title: "Desenvolvedor de software at Serasa"
      },
      {
        description: "Trabalho no desenvolvimento de melhorias e novas funcionalidades para os serviços de integração bancária e renegociação de boletos utilizando C# com .NET, SQLSERVER e boas praticas de programação. Partipação no refinamento de melhorias do produto Sustentação das API no dia dia no modelo Kambam	Responsável por implementar o Strategy Partner para a leitura de arquivos CNAB.",
        img: "../../../assets/atos.jpg",
        skills: ["C#", "SQL", ".net", "html", "CNAB", ],
        title: "Desenvolvedor de software at Atos Capital"
      },
      {
        description: "Trabalhando no desenvolvimento de melhorias e novas funcionalidadespara as APIs de integração com marketplaces, como Magazine Luiza, Amazon, Mercado Livre, entre outros, utilizando Java, Kotlin e Arquitetura Hexagonal. MongoDB Responsável pelo desenvolvimento de paginas SPA com Angular ",
        img: "../../../assets/gubee.png",
        skills: ["JAVA", "KOTLIN", "MONGODB", "Docker", "AWS", "Arquitetura Hexagonal"],
        title: "Desenvolvedor de software at Gubee"
      },
      {
        description: "Trabalhando no desenvolvimento do VIGIAGROPEC, Sistema de vigilancia agropecuaria utilizando java e spring boot e fazendo a geração de relatorios com jasper reports e ajustes nas paginas SPA com angular",
        img: "../../../assets/sm.png",
        skills: ["JAVA", "SQL", "spring boot", "jenkins", "angular"],
        title: "Desenvolvedor"
      }
    ]
    console.log(this.experiences)
  }
}
