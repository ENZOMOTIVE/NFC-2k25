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
        
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-4">
      <h1 className="text-4xl font-bold"> Kurushetra 2k24 </h1>
      <p> Enigma Football Cup</p>

      <div className="flex space-x-10">
        <Link href="/pages/Fixtures">
        <button className="!bg-red-500 !hover:bg-red-600 !text-white px-4 py-2 rounded-md border border-white">
            Fixtures
          </button>
        </Link>

        <Link href="/pages/Rules">
        <button className="!bg-red-500 !hover:bg-red-600 !text-white px-4 py-2 rounded-md border border-white">
            Rules
          </button>
        </Link> 


      </div>
  </div>
</div>
    );
}
