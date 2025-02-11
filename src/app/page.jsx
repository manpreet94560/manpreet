"use client"
import Navbar from './componennts/Navbar';
import Hero from './componennts/Hero';

export default function Home() {
  
  return (
    <main>
      <Navbar />
      <div className="main-content">
        <Hero />
      </div>
    </main>
  );
}
