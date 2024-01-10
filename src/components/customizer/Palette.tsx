"use client";

import Image from "next/image";
import { useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import { Switch, Dialog } from "@headlessui/react";
import state from "@/contexts";
import React, { useState } from "react";

const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

type DecalType = keyof typeof DecalTypes;

export const ColorPicker = () => {
  const tshirt = useSnapshot(state);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Image
          src="/color-wheel.png"
          alt="color wheel"
          height={50}
          width={50}
          className="mx-auto"
        />
        Customize Color
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 z-10" />
        <Dialog.Panel className="absolute top-[30%] left-[42.5%] z-20">
          <div className="glassmorphism p-3 h-[20rem] w-[20rem] rounded-lg flex flex-col items-center justify-between">
            <HexColorPicker
              color={tshirt.color}
              onChange={(color) => (state.color = color)}
              className="mt-3"
            />
            <button
              className="bg-neutral-800 text-white px-4 py-2 rounded-lg w-[50%] mx-auto"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export const FilePicker = ({ file, setFile }: { file: any; setFile: React.Dispatch<React.SetStateAction<any>> }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const readFile = (type: DecalType) => {
    reader(file).then((result) => {
      handleDecals(type, result);
    });
    setIsOpen(false);
  };


  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Image
          src="/file.png"
          alt="file"
          height={50}
          width={50}
          className="mx-auto"
        />
        Upload Image
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 z-10" />

        <Dialog.Panel className={`absolute top-[30%] left-[42.5%] z-20`}>
          <div
            className={`${
              file.size !== 0 ? `justify-between` : `justify-evenly`
            } glassmorphism p-3 h-[20rem] w-[20rem] rounded-lg flex flex-col `}
          >
            <p className="mt-2 text-gray-300 truncate">
              {file === undefined ? "No File Selected" : file.name}
            </p>
            <label className="cursor-pointer bg-neutral-800 text-white p-2 rounded-lg w-full text-center">
              Choose File
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setFile(e.target.files?.[0]);
                }}
              />
            </label>
            <div className="flex flex-col">
              {file.size !== 0 && (
                <div className="flex justify-center">
                  <button
                    className="bg-neutral-800 text-white px-4 py-2 m-2 rounded-lg w-full"
                    onClick={() => readFile("logo")}
                  >
                    Logo
                  </button>
                  <button
                    className="bg-neutral-800 text-white px-4 py-2 m-2 rounded-lg w-full"
                    onClick={() => readFile("full")}
                  >
                    Full
                  </button>
                </div>
              )}
              <button
                className="bg-neutral-800 text-white px-4 py-2 rounded-lg w-[50%] mx-auto"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export const DecalSwitch = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) => {
  return (
    <div className="h-[5rem] w-[8rem] flex flex-col rounded-lg justify-around items-center">
      <Switch
        checked={checked}
        onChange={onChange}
        className={`${
          checked ? "bg-neutral-900" : "bg-neutral-700"
        } relative inline-flex items-center h-6 rounded-full w-11 mt-1`}
      >
        <span className="sr-only">{`Toggle ${label}`}</span>
        <span
          className={`${
            checked ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out`}
        />
      </Switch>
      <p className="p-2 pb-0 mt-1">{label}</p>
    </div>
  );
};

export const AIPicker = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleLogoDecal = async () => {
    setIsGenerating(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    handleDecals("logo", `data:image/png;base64,${data.image}`);
    setIsOpen(false);
    setIsGenerating(false);
  };

  const handleFullDecal = async () => {
    setIsGenerating(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    handleDecals("full", `data:image/png;base64,${data.image}`);
    setIsOpen(false);
    setIsGenerating(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Image
          src="/ai-assistant.png"
          alt="prompt to image"
          height={50}
          width={50}
          className="mx-auto"
        />
        Generate AI Image
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 z-10" />
        <Dialog.Panel className="absolute top-[27.5%] left-[40%] z-20">
          <div className="glassmorphism h-[25rem] w-[25rem] rounded-lg flex flex-col items-center justify-between px-8 py-4">
            <textarea
              placeholder="Ask AI"
              rows={8}
              value={prompt}
              className="bg-transparent text-white/75 m-3 w-full border-2 border-white/50 p-2"
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            />
            <div className="flex justify-center w-full">
              <button
                className={`${
                  isGenerating
                    ? "hidden"
                    : "bg-neutral-800 text-white px-4 py-2 m-2 rounded-lg w-full"
                }`}
                onClick={handleLogoDecal}
              >
                Logo
              </button>
              <button
                className={`${
                  isGenerating
                    ? "hidden"
                    : "bg-neutral-800 text-white px-4 py-2 m-2 rounded-lg w-full"
                }`}
                onClick={handleFullDecal}
              >
                Full
              </button>
              <button
                className={`${
                  isGenerating ? "block" : "hidden"
                } bg-neutral-800 text-white px-8 py-2 m-2 rounded-lg w-full flex justify-center items-center disabled pointer-events-none`}
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600 mx-2"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#737373"
                  />
                </svg>{" "}
                Generating
              </button>
            </div>
            <button
              className="bg-neutral-800 text-white px-4 py-2 rounded-lg w-[50%] mx-auto"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export const ImageDownload = () => {
  const downloadCanvasToImage = () => {
    const canvas = document.querySelector("canvas");
    const dataURL = canvas!.toDataURL();
    const link = document.createElement("a");

    link.href = dataURL;
    link.download = "canvas.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="px-4 rounded-lg" onClick={downloadCanvasToImage} >
      <Image src='/down-file.png' alt='download canvas' height={50} width={50} className="mx-auto"/>
      Save Canvas
    </button>
  );
};

const reader = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

const handleDecals = (type: DecalType, result: any) => {
  const decalType = DecalTypes[type].stateProperty;

  if (decalType == "fullDecal") {
    state.fullDecal = result;
    state.isFullTexture = true;
  }
  if (decalType == "logoDecal") {
    state.logoDecal = result;
  }
};
