
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomeService } from './home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink]
})
export class HomeComponent {
  homeService = inject(HomeService);
  welcomeData = this.homeService.getWelcomeData();
}
