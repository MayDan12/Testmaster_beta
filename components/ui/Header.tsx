"use client";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Button } from "./button";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 50 to whatever scroll threshold you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex place-content-center px-10 justify-between md:justify-around py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-[#120030] text-white opacity-96"
          : "bg-transparent text-gray-800"
      }`}
    >
      <Link href="/">
        <h1 className="font-bold text-xl ">Test Master</h1>
      </Link>
      <Navbar />
      <Button
        className={`bg-[#3a0096] text-white shadow-sm font-semibold hover:bg-gray-700 ${
          isScrolled ? "bg-slate-50 text-[#3a0096] hover:bg-slate-200" : ""
        }`}
      >
        Get Started
      </Button>
    </header>
  );
}
