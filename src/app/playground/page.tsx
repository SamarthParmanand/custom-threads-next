"use client";

import TShirtCanvas from "@/components/canvas/Canvas";
import Customizer from "@/components/customizer/Customizer";

export default function Playground() {
  return (
    <div className="w-full h-[100vh] flex flex-col bg-gray-400">
      <TShirtCanvas />
      <Customizer />
    </div>
  );
}
