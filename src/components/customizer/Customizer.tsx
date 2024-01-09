"use client";

import { useState } from "react";
import { ColorPicker, FilePicker, AIPicker, ImageDownload, DecalSwitch } from "./Palette";
import { useSnapshot } from "valtio";
import state from "@/contexts";

export default function Customizer() {
  const [file, setFile] = useState<File>(new File([], ""));
  const snap = useSnapshot(state);

  return (
    <div className="flex justify-evenly mb-16 mx-[15vw]">
      <ColorPicker />
      <FilePicker file={file} setFile={setFile} />
      <AIPicker />
      <DecalSwitch checked={snap.isLogoTexture} onChange={() => state.isLogoTexture = !snap.isLogoTexture} label="Logo Decal"/>
      <DecalSwitch checked={snap.isFullTexture} onChange={() => state.isFullTexture = !snap.isFullTexture} label="Full Decal"/>
      <ImageDownload />
    </div>
  );
}
