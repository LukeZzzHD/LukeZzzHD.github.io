'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type ParallaxHeadingProps = {};

export function ParallaxHeading({ children }: React.PropsWithChildren<ParallaxHeadingProps>) {
  const parentRef = useRef<HTMLElement>(null);
  const titleSectionRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['start start', 'end start'],
  });

  const [parentWidth, setParentWidth] = useState(0);
  const [titleWidth, setTitleWidth] = useState(0);

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['0vw', `-${parentWidth / 2 - titleWidth / 2}px`]
  );

  useEffect(() => {
    const measureParent = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
      }

      if (titleSectionRef.current) {
        setTitleWidth(titleSectionRef.current.clientWidth);
      }
    };

    measureParent();
    window.addEventListener('resize', measureParent);

    return () => window.removeEventListener('resize', measureParent);
  }, []);

  return (
    <section ref={parentRef} className="h-screen flex flex-col justify-center items-center">
      <motion.div
        className={`sticky top-5`}
        ref={titleSectionRef}
        style={{
          translateX,
        }}
      >
        <motion.h1 className="font-bold text-5xl mb-5 text-center">{children}</motion.h1>
      </motion.div>
    </section>
  );
}
