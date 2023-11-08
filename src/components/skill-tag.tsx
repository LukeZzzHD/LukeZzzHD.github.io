'use client';

export type SkillTagCategory =
  | 'frontend'
  | 'backend'
  | 'cloud'
  | 'orchestration'
  | 'ai'
  | 'devops'
  | 'scripting'
  | 'testing';

export function SkillTag({ tag }: { tag: SkillTagCategory }) {
  return (
    <span className="skill-tag inline-block border-2 border-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-600 mr-2">
      #{tag}
    </span>
  );
}
