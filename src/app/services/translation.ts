import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Language = 'en' | 'es' | 'it';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private http = inject(HttpClient);

  currentLang = signal<Language>('en');
  translations = signal<Record<string, any>>({});
  isLoaded = signal<boolean>(false);

  getInitialLanguage(): Language {
    const saved = localStorage.getItem('lang') as Language;
    if (saved === 'en' || saved === 'es' || saved === 'it') {
      return saved;
    }
    if (navigator.language.startsWith('es')) return 'es';
    if (navigator.language.startsWith('it')) return 'it';
    return 'en';
  }

  async init(): Promise<void> {
    const lang = this.getInitialLanguage();
    this.currentLang.set(lang);
    document.documentElement.lang = lang;

    try {
      const data = await firstValueFrom(this.http.get<Record<string, any>>(`/i18n/${lang}.json`));
      this.translations.set(data);
      this.isLoaded.set(true);
    } catch (err) {
      console.error(`Error loading initial translations for ${lang}:`, err);
    }
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    this.http.get<Record<string, any>>(`/i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.translations.set(data);
        this.isLoaded.set(true);
      },
      error: (err) => console.error(`Error loading translations for ${lang}:`, err),
    });
  }

  translate(path: string): string {
    const keys = path.split('.');
    let result: any = this.translations();

    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return this.isLoaded() ? path : '';
      }
    }

    return typeof result === 'string' ? result : '';
  }
}
