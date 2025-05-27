import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import perfil from '../imgs/perfilofc.png';

const App = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.8 });

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
        <div className="grid grid-cols-2 max-w-5xl mx-auto px-5">
          <div className="h-1 w-4/5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 col-span-2 mx-auto mt-10"></div>
          <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
            <TypeAnimation
              sequence={[
                '...',
                700,
                'MEU NOME É VICTOR HUGO\nSOU DESENVOLVEDOR FRONT-END',
                800,
                'ATUALMENTE CURSANDO ADS NO TERCEIRO SEMESTRE..',
                800,
                'TENHO EXPERIENCIA COM REACT, TAILWIND, JS E GIT',
                800,
                'BUSCANDO SEMPRE APREENDER MAIS\nE MELHORAR MINHAS SKILLS\nCOMO DESENVOLVEDOR',
                800,
              ]}
              wrapper="pre"
              cursor={true}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-line' }}
              className="font-bold text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent inline-block font-mono select-none min-h-[300px]"
            />
          </div>
          <div className="flex justify-end items-center select-none min-h-[calc(100vh-200px)]">
            <img
              src={perfil}
              alt="imagem de perfil"
              className="hover:scale-105 transition"
            />
          </div>
        </div>
        <div className="col-span-2 max-w-5xl mx-auto px-5">
          <div className="col-span-2">
            <h1
              className="relative font-bold text-5xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent capitalize
              before:absolute before:bg-fuchsia-500 before:w-14 before:h-1 before:-left-6 before:top-1 before:-rotate-45 inline-block"
            >
              sobre mim
            </h1>
            <p className="font-mono text-xl text-white my-14 capitalize">
              Atualmente me dedico ao estudo de desenvolvimento front-end, com
              foco em React, JavaScript, Tailwind CSS e bibliotecas modernas de
              animação no ecossistema React. Estou em busca de uma oportunidade
              de estágio, onde eu possa aplicar na prática o que venho
              aprendendo e crescer junto com profissionais experientes. Tenho
              grande interesse em tecnologia e estou sempre em busca de evolução
              constante por meio da prática e do contato com novos desafios. Em
              breve, espero integrar uma equipe onde eu possa colaborar
              ativamente e também aprender com quem já vive o dia a dia da área
              que tanto admiro.
            </p>
          </div>
        </div>
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
        <div className='grid grid-cols-3 max-w-5xl my-40 mx-auto px-5 gap-8'>
          <h1
                className="relative col-span-3 font-bold text-5xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent capitalize
                before:absolute before:bg-fuchsia-500 before:w-14 before:h-1 before:-left-6 before:top-1 before:-rotate-45 inline-block"
              >
                conhecimento | <span className='bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent inline-block'>estudando</span>
              </h1>
          <div className='flex gap-4 border-4 border-violet-500 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition text-center'>
              <p>
                react
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-violet-500 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                js
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-violet-500 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                css
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-violet-500 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                react router
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-violet-500 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                react
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-amber-400 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                REST API
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-amber-400 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                sass
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-amber-400 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                typescript
              </p>
              <img src="" alt="" />
          </div>
          <div className='flex gap-4 border-4 border-amber-400 bg-violet-950 p-5 rounded-md text-2xl text-white hover:scale-105 items-center transition'>
              <p>
                UI/UX
              </p>
              <img src="" alt="" />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default App;
