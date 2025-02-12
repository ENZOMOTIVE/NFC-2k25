import NextImage from "next/image";
import Link from "next/link";
import bgImage from "@/assets/Fadedbackground.jpg";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <NextImage
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-8 bg-black/30">
        <h1 className="text-6xl font-bold tracking-tight animate-fade-in-down text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
            Kurushetra 2k24
          </span>
        </h1>
        
        <p className="text-2xl font-light tracking-widest uppercase animate-fade-in-up">
          <span className="border-b-2 border-red-500 pb-1">
            Enigma Football Cup
          </span>
        </p>
        
        <div className="flex space-x-10 mt-8">
          <Link href="/pages/Fixtures">
            <button className="group relative px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 text-lg">
                Fixtures
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </Link>
          
          <Link href="/pages/Rules">
            <button className="group relative px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 text-lg">
                Rules
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}