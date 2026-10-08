import { Component, inject } from '@angular/core';
import { SkillCategory } from '../../core/models/skills.model';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styles: ``,
})
export class SkillsComponent {
  ts = inject(TranslationService);
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        'TypeScript',
        'JavaScript',
        'React.js',
        'Next.js',
        'Angular',
        'React Native',
        'HTML5',
        'CSS3 / Tailwind',
        'PWA',
      ],
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'Java (Spring Boot)', 'RESTful APIs', 'GraphQL'],
    },
    {
      title: 'Databases & Storage',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'DevOps, Tools & Practices',
      skills: ['Git', 'Vercel', 'Jira', 'Agile / Scrum', 'Peer Coding', 'AMS Management'],
    },
  ];
}
