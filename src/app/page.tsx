import { SkillCard } from '@/components/skill-card';
import { Skill } from '@/interfaces';
import { ModeToggle } from '@/components/mode-toggle';

const skills: Skill[] = [
  {
    title: 'Slack Apps',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut pariatur atque soluta enim nulla labore doloribus quaerat tempore ipsam, error maxime nihil fugit necessitatibus! Velit iure repudiandae tempora quae excepturi?',
    description: 'backend & UI',
  },
  {
    title: 'Nodejs',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam repellat officiis aliquid pariatur iusto quasi eveniet suscipit! Nobis harum quia beatae nesciunt modi impedit repellendus tenetur architecto nam nisi.',
    description: 'backend',
  },
  {
    title: 'AWS Services',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, provident debitis maxime, in quam est veniam dolore quo odit cumque doloribus sequi omnis laborum commodi quis aliquam repudiandae sint iusto!',
    description: 'cloud',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-16 mt-12 text-5xl text-center">
        Welcome to my portfolio!
      </h1>

      <div className="flex">
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </div>
      <ModeToggle />
    </div>
  );
}
