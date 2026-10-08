import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styles: ``,
})
export class FooterComponent {
  ts = inject(TranslationService);
  currentYear = new Date().getFullYear();
}
