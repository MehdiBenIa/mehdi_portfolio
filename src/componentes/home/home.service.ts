
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private welcomeData = signal({
    greeting: 'Hola, soy',
    name: 'Tu Nombre',
    title: 'Desarrollador Full-Stack Java & Angular',
    summary: 'Apasionado por crear aplicaciones web robustas, escalables y con interfaces de usuario intuitivas. Especializado en el ecosistema de Spring Framework y el poder de Angular para el frontend.'
  });

  getWelcomeData() {
    return this.welcomeData.asReadonly();
  }
}
