import React from 'react';
import Conhecimentos from './conhecimentos.jsx';
import Principal from './principal.jsx';
import Contato from './contato.jsx';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const App = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
  }, [controls1, inView1]);

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    }
  }, [controls2, inView2]);

  return (
    <main>
      <div className="h-1 w-4/5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto mt-10 mb-5 max-w-[800px]"></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        }}
        className=""
      >
        <Principal />
      </motion.div>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        }}
        className=""
      >
        <Conhecimentos />
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        }}
        className=""
      >
        <Contato/>
      </motion.div>
      <div className="h-1 w-4/5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto mb-10 max-w-[800px]"></div>
    </main>
  );
};

export default App;
