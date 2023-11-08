import { SkillTagCategory } from './components/skill-tag';

export interface Skill {
  id: number;
  title: string;
  content: string;
  tags: SkillTagCategory[];
  link: string;
}
