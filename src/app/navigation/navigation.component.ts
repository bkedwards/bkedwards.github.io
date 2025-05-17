import { Component } from '@angular/core';
import { ScrollService } from './scroll.service'

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  exactRouteMatch = { exact: true };
  constructor(private scrollService: ScrollService){}

  scrollToSection(id: string) {
    this.scrollService.scrollTo(id);
  }
}
