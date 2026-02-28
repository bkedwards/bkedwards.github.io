import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isLight = false;

  toggle() {
    this.isLight = !this.isLight;

    if (this.isLight) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }

  init() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      this.isLight = true;
      document.body.classList.add('light-theme');
    }
  }
}