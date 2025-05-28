import React from 'react';
import email from '../imgs/svgs/email.svg';
import linkedin from '../imgs/svgs/linkedin.svg';
import github from '../imgs/svgs/github.svg';

const Contato = () => {
  return (
    <div className="col-span-2 max-w-5xl mx-auto px-8 font-sans">
      <h1
        className="relative font-bold text-5xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent capitalize
              before:absolute before:bg-fuchsia-500 before:w-14 before:h-1 before:-left-6 before:top-1 before:-rotate-45 inline-block mb-10 max-md:text-3xl"
      >
        contato
      </h1>
      <div className="flex mb-24 text-xl font-bold gap-5 justify-center max-md:flex-col max-md:items-center">
        <div className='flex border-2 border-white rounded-2xl items-center gap-5 p-4 text-white hover:cursor-pointer hover:scale-105 transition'>
          <a href="https://www.linkedin.com/in/victorfarias-front/">linkedin</a>
          <img src={linkedin} />
        </div>
        <div className='flex border-2 border-white rounded-2xl items-center gap-5 p-4 hover:cursor-pointer hover:scale-105 transition'>
          <a
            href="mailto:vicdfarias@gmail.com?subject=Olá!%20Vi%20seu%20portfólio&cc=&bcc=&body=Olá%20Victor,%20gostei%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            className="text-white"
          >
            vicdfarias@gmail.com
          </a>
          <img src={email} />
        </div>
        <div className='flex border-2 border-white rounded-2xl items-center gap-5 p-4 text-white hover:cursor-pointer hover:scale-105 transition'>
          <a href="https://github.com/VictorHugo-Sys">git hub</a>
          <img src={github} />
        </div>
      </div>
    </div>
  );
};

export default Contato;
