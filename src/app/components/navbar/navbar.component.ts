import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';
import { Language, TranslationService } from '../../services/translation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  ts = inject(TranslationService);
  themeService = inject(ThemeService);
  languages: Language[] = ['en', 'es', 'it'];
}
