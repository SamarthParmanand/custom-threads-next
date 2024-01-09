"use client";

import { useEffect } from "react";
import { TShirtContext } from "@/contexts/TShirtContext";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const initialState = {
  color: "#222",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
};

import AOS from "aos";
import "aos/dist/aos.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <TShirtContext initialState={initialState}>
        <main className="grow">
          <Header />
          {children}
          <Footer />
        </main>
      </TShirtContext>
    </>
  );
}
