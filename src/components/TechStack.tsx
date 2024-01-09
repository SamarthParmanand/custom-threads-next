import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHeadlessui,
} from "react-icons/si";
import {
  TbBrandThreejs,
  TbBrandOpenai,
  TbWind,
  TbBrandReact,
} from "react-icons/tb";
export default function TechStack() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">
              Cutting edge{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-800">
                Tech-Stack
              </span>{" "}
              in action
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar
              mattis blandit libero cursus mattis.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">
            {/* Item */}
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <TbBrandThreejs size="2rem" className="m-2" />
              ThreeJS
            </div>
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <SiNextdotjs size="2rem" className="m-2" />
              NextJS
            </div>
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <TbBrandReact size="2rem" className="m-2" />
              Valtio
            </div>
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <SiTailwindcss size="2rem" className="m-2" />
              TailwindCSS
            </div>
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <SiHeadlessui size="2rem" className="m-2" />
              Headless UI
            </div>
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <TbBrandOpenai size="2rem" className="m-2" />
              OpenAI DALL-E
            </div>
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <SiTypescript size="2rem" className="m-2" />
              TypeScript
            </div>
            <div className="flex items-center flex-col justify-center py-2 col-span-2 md:col-auto text-neutral-800 font-bold my-4">
              <TbWind size="2rem" className="m-2" />
              Animate On Scroll
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
