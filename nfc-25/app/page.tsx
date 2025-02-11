"use client";
import { useState, useEffect } from "react";
import Hero from '@/app/pages/Hero/hero';
import Footer from '@/app/pages/Footer/footer';
import Loader from '@/app/pages/Loader/loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already visited the site
    const isFirstVisit = localStorage.getItem("firstVisit");

    if (isFirstVisit) {
      
      setLoading(false);
    } else {
      
      const timer = setTimeout(() => {
        setLoading(false);
      
        localStorage.setItem("firstVisit", "true");
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="items-center justify-items-center min-h-screen">
      {loading ? <Loader /> : (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </div>
  );
}
