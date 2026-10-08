import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Language = 'en' | 'es' | 'it';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private http = inject(HttpClient);

  currentLang = signal<Language>('en');
  translations = signal<Record<string, any>>({});
  isLoaded = signal<boolean>(false);

  constructor() {
    const saved = localStorage.getItem('lang') as Language;
    const initialLang: Language =
      saved === 'en' || saved === 'es' || saved === 'it'
        ? saved
        : navigator.language.startsWith('es')
          ? 'es'
          : navigator.language.startsWith('it')
            ? 'it'
            : 'en';

    this.setLanguage(initialLang);
  }

  setLanguage(lang: Language) {
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
        return path;
      }
    }

    return typeof result === 'string' ? result : path;
  }
}
