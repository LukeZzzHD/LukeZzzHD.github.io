'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  description: string;
  content: string;
}

export function SkillCard({ title, description, content }: SkillCardProps) {
  return (
    <Card className="skill-card w-full border p-4 rounded shadow-md">
      <CardHeader className="mb-2">
        <CardTitle className="text-xl font-bold mb-1">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800">{content}</p>
      </CardContent>
    </Card>
  );
}
