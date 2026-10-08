import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal<boolean>(true);

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialDark = savedTheme
      ? savedTheme === 'dark'
      : savedTheme === null
        ? true
        : systemPrefersDark;
    this.isDarkMode.set(initialDark);

    effect(() => {
      const dark = this.isDarkMode();
      if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update((prev) => !prev);
  }
}
