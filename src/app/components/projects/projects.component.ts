import { Component, computed, inject } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styles: ``,
})
export class ProjectsComponent {
  ts = inject(TranslationService);
  projects = computed<Project[]>(() => {
    const data = this.ts.translations();
    return data?.['projects']?.items || [];
  });
}
