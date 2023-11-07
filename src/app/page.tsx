import { SkillCard } from '@/components/skill-card';
import { ModeToggle } from '@/components/mode-toggle';
import { FlashlightCursor } from '@/components/flashlight-cursor';
import { skills } from '@/data/skills';
import { Introduction } from '@/components/introduction';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Introduction />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
        {/* Cool stuff */}
        <ModeToggle />
        <FlashlightCursor />
      </div>
    </main>
  );
}
