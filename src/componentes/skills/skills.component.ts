
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skillsByCategory = signal<SkillCategory[]>([
    { name: 'Backend', skills: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Maven', 'REST APIs', 'Microservicios'] },
    { name: 'Frontend', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'RxJS'] },
    { name: 'Bases de Datos', skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'] },
    { name: 'DevOps & Herramientas', skills: ['Docker', 'Git', 'Jenkins', 'Kubernetes (Básico)', 'Linux'] },
    { name: 'Testing', skills: ['JUnit', 'Mockito', 'Jasmine', 'Karma'] }
  ]);
}
