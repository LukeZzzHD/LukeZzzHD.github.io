'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const [parentWidth, setParentWidth] = useState(0);
  const [subtitleWidth, setSubtitleWidth] = useState(0);

  const titleX = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const subtitleX = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['0vw', `-${parentWidth / 2 - subtitleWidth / 2}px`]
  );

  useEffect(() => {
    const measureParent = () => {
      if (sectionRef.current) {
        setParentWidth(sectionRef.current.offsetWidth);
      }

      if (subtitleRef.current) {
        setSubtitleWidth(subtitleRef.current.clientWidth);
      }
    };

    // Measure on mount and window resize
    measureParent();
    window.addEventListener('resize', measureParent);

    // Cleanup
    return () => window.removeEventListener('resize', measureParent);
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex flex-col justify-center items-center">
      <motion.div
        style={{
          translateX: titleX,
        }}
      >
        <motion.h1 className="font-bold text-9xl mb-10 text-center">
          Hi, I'm{' '}
          <span className="hover:cursor-pointer">
            <span className="hover:opacity-75">L</span>
            <span className="hover:opacity-75">u</span>
            <span className="hover:opacity-75">k</span>
            <span className="hover:opacity-75">a</span>
            <span className="hover:opacity-75">s</span>
          </span>
        </motion.h1>
      </motion.div>
      <motion.div
        className={'sticky top-5'} //`${isSticky ? 'sticky top-5' : ''}`}
        style={{
          translateX: subtitleX,
        }}
      >
        <motion.h1 ref={subtitleRef} className="font-bold text-5xl mb-5 text-center">
          I like to build things
        </motion.h1>
      </motion.div>
    </section>
  );
}
