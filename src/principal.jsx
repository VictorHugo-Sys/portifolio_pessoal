import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import perfil from '../imgs/perfilofc.png';

const Principal = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-w-5xl mx-auto px-8 gap-4 max-md:flex max-md:flex-col max-md:items-center">
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)] max-md:min-h-[200px] max-md:justify-center max-md:items-center">
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
            className="font-bold text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent inline-block font-mono select-none text-center"
          />
        </div>
        <div className="flex justify-end items-center select-none max-md:justify-center">
          <img
            src={perfil}
            alt="imagem de perfil"
            className="hover:scale-105 transition max-w-[400px]"
          />
        </div>
      </div>
      <div className="col-span-2 max-w-5xl mx-auto mb-32 px-8">
        <div className="col-span-2">
          <h1
            className="relative font-bold font-sans text-5xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent capitalize
              before:absolute before:bg-fuchsia-500 before:w-14 before:h-1 before:-left-6 before:top-1 before:-rotate-45 inline-block"
          >
            sobre mim
          </h1>
          <p className="font-mono text-xl text-white my-8 capitalize">
            Atualmente me dedico ao estudo de desenvolvimento front-end, com
            foco em React, JavaScript, Tailwind CSS e bibliotecas modernas de
            animação no ecossistema React. Estou em busca de uma oportunidade de
            estágio, onde eu possa aplicar na prática o que venho aprendendo e
            crescer junto com profissionais experientes. Tenho grande interesse
            em tecnologia e estou sempre em busca de evolução constante por meio
            da prática e do contato com novos desafios. Em breve, espero
            integrar uma equipe onde eu possa colaborar ativamente e também
            aprender com quem já vive o dia a dia da área que tanto admiro.
          </p>
        </div>
      </div>
    </>
  );
};

export default Principal;
