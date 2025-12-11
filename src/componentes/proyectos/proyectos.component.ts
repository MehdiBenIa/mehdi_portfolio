
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosComponent {
  projects = signal<Project[]>([
    {
      title: 'Sistema de Gestión de Clientes',
      description: 'Una aplicación web full-stack para la gestión de clientes, facturas y productos. Implementa autenticación y autorización con Spring Security.',
      stack: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'API REST para E-commerce',
      description: 'Backend para una tienda online con endpoints para productos, pedidos, usuarios y pagos. Arquitectura de microservicios.',
      stack: ['Java', 'Spring Cloud', 'JPA', 'MySQL', 'Maven'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Dashboard de Análisis de Datos',
      description: 'Interfaz interactiva en Angular para visualizar datos complejos consumiendo una API REST. Uso intensivo de RxJS para la gestión del estado.',
      stack: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS'],
      liveUrl: '#',
      repoUrl: '#'
    }
  ]);
}
