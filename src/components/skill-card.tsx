'use client';

import {
  Card,
  CardContent,
  /*CardDescription,*/
  CardTags,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { SkillTag, SkillTagCategory } from './skill-tag';

interface SkillCardProps {
  title: string;
  content: string;
  tags: SkillTagCategory[];
  link: string;
}

export function SkillCard({ title, content, tags, link }: SkillCardProps) {
  return (
    <a href={link}>
      <Card className="skill-card flex flex-col w-full h-full border p-4 rounded shadow-md hover:dark:border-blue-500 dark:hover:text-white">
        <CardHeader className="mb-2">
          <CardTitle className="text-xl font-bold mb-1">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="skill-card-content text-gray-600">{content}</p>
        </CardContent>
        <CardTags>
          {tags.map((tag) => (
            <SkillTag key={tag} tag={tag} />
          ))}
        </CardTags>
      </Card>
    </a>
  );
}
