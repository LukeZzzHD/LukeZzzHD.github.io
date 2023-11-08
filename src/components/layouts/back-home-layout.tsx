// components/Layout.tsx

import { HomeIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

export function BackHomeLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <header>
        <Button className="back-home-button fixed top-4 left-4" variant="outline" size="icon">
          <a href="/">
            <HomeIcon className="back-home-icon relative h-[1.2rem] w-[1.2rem] scale-100" />
          </a>
        </Button>
      </header>
      <main>{children}</main>
    </>
  );
}
