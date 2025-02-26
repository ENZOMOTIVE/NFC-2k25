"use client";
import LoaderGif from '@/assets/loader.gif'
import Image from 'next/image';

const Loader = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center">
        <Image src={LoaderGif.src} alt="Loading..." width={150} height={150} />
      </div>
    );
  };
  
  export default Loader;
