'use client';

import React from 'react';
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
}

export function SkillCard({ title, content, tags }: SkillCardProps) {
  return (
    <Card className="skill-card flex flex-col w-full border p-4 rounded shadow-md dark:hover:text-white">
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
  );
}
