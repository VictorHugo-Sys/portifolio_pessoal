import React from 'react';
import react from '../imgs/svgs/react.svg';
import js from '../imgs/svgs/js.svg';
import css from '../imgs/svgs/css.svg';
import router from '../imgs/svgs/router.svg';
import tailwind from '../imgs/svgs/tailwind.svg';
import git from '../imgs/svgs/git.svg';
import word from '../imgs/svgs/word.svg';
import sass from '../imgs/svgs/sass.svg';
import typescript from '../imgs/svgs/typescript.svg';
import figma from '../imgs/svgs/figma.svg';
import python from '../imgs/svgs/python.svg';

const Conhecimentos = () => {
  return (
    <div className="grid grid-cols-3 max-w-5xl mb-32 mx-auto px-8 gap-8 font-sans max-md:flex max-md:flex-col max-md:items-center">
      <h1
        className="relative col-span-3 font-bold text-5xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent capitalize
                before:absolute before:bg-fuchsia-500 before:w-14 before:h-1 before:-left-6 before:top-1 before:-rotate-45 inline-block  
                max-md:text-3xl max-md:self-start max-md:pl-4"
      >
        conhecimento |{' '}
        <span className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent inline-block">
          estudando
        </span>
      </h1>
      <div className="box-purple scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>react</p>
        <img src={react} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-purple scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>js</p>
        <img src={js} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-purple scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>css</p>
        <img src={css} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-purple scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>router</p>
        <img src={router} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-purple scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>tailwind</p>
        <img src={tailwind} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-purple scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>git</p>
        <img src={git} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-yellow scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>Rest api</p>
        <img src={word} className="w-10 h-10 object-contain " />
      </div>
      <div className="box-yellow scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>sass</p>
        <img src={sass} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-yellow scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>typescript</p>
        <img src={typescript} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-yellow scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>UI/UX</p>
        <img src={figma} className="w-10 h-10 object-contain" />
      </div>
      <div className="box-yellow scale-100 max-md:scale-95 max-md:w-[80vw] max-md:mx-auto">
        <p>python</p>
        <img src={python} className="w-10 h-10 object-contain" />
      </div>
    </div>
  );
};

export default Conhecimentos;
