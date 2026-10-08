import { Component, inject } from '@angular/core';
import { Language, TranslationService } from '../../services/translation';

@Component({
  selector: 'app-language-select',
  standalone: true,
  imports: [],
  templateUrl: './language-select.html',
  styles: ``,
})
export class LanguageSelect {
  ts = inject(TranslationService);
  languages: Language[] = ['en', 'es', 'it'];
}
