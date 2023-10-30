import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

interface SkillCardProps {
  title: string;
  description: string;
  content: string;
}

export function SkillCard({ title, description, content }: SkillCardProps) {
  return (
    <Card className="w-1/3 px-2 m-3 cursor-pointer rounded shadow hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
