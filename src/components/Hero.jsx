import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Political-vulture/Zeaton", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='cyan_gradient '>ZEATON</span>
      </h1>
      <h2 className='desc'>
      Discover Zeaton: The ultimate article simplifier! Say farewell to lengthy texts and welcome concise summaries. Simplify complex content effortlessly with Zeaton's magic. Experience the future of reading today!
      </h2>
    </header>
  );
};

export default Hero;
