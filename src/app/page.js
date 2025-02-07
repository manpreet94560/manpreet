"use client"
import { useEffect, useState } from 'react'
import Navbar from './componennts/Navbar'
import Hero from './componennts/Hero'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <main>
      <Navbar />
      <div className="main-content">

        <Hero />
      </div>
    </main>
  )
}