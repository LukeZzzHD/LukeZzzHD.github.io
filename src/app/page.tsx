import { SkillCard } from '@/components/skill-card';
import { skills } from '@/data/skills';
import { Introduction } from '@/components/introduction';
import { ContactInformation } from '@/components/contact-information';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Introduction />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </section>
        {/*<ContactInformation /> */}
      </div>
    </main>
  );
}
