import { Component, computed, inject } from '@angular/core';
import { WorkExperience } from '../../core/models/experience.model';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styles: ``,
})
export class ExperienceComponent {
  ts = inject(TranslationService);
  experiences = computed<WorkExperience[]>(() => {
    const data = this.ts.translations();
    return data?.['experience']?.items || [];
  });
}
