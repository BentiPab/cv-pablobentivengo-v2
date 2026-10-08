import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styles: ``,
})
export class HeroComponent {
  ts = inject(TranslationService);
}
