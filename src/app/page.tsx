import { SkillCard } from '@/components/skill-card';
import { ModeToggle } from '@/components/mode-toggle';
import { FlashlightCursor } from '@/components/flashlight-cursor';

import { skills } from '@/data/skills';

export default function Home() {
  return (
    <div className="container px-4 py-4">
      <h1 className="font-bold mb-16 mt-80 text-9xl text-center">
        Hi, I'm <span>Lukas</span>
      </h1>
      <h1 className="font-bold mb-80 mt-12 text-5xl text-center">Welcome to my portfolio!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </div>
      {/* Cool stuff */}
      <ModeToggle />
      <FlashlightCursor />
    </div>
  );
}
