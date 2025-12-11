
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  navLinks = [
    { path: '/home', label: 'Inicio' },
    { path: '/sobre-mi', label: 'Sobre Mí' },
    { path: '/skills', label: 'Skills' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/experiencia', label: 'Experiencia' },
    { path: '/contacto', label: 'Contacto' },
  ];

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
