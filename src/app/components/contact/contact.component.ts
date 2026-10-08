import { Component, inject, signal } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styles: ``,
})
export class ContactComponent {
  ts = inject(TranslationService);
  email = 'pablobentivengo@gmail.com';
  phone = '(+54) 9 11 6624-4102';
  cleanPhone = '5491166244102';

  copied = signal(false);

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.copied.set(true);
    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}
