'use client';

import { ParallaxHeading } from '@/components/parallax-heading';
import { BackHomeLayout } from '@/components/layouts/back-home-layout';

export default function Component() {
  return (
    <BackHomeLayout>
      <div className="container">
        <ParallaxHeading>Slack Apps</ParallaxHeading>
        <section className="h-screen-1/2 flex flex-col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti vero quo soluta,
            quaerat similique atque iste nulla laboriosam ratione incidunt ex molestias dignissimos
            culpa suscipit itaque. Sunt, non id.
          </p>
        </section>
      </div>
    </BackHomeLayout>
  );
}
