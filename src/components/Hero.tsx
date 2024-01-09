import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center mb-6 md:mb-12">
            <h1
              className="text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-8"
              data-aos="zoom-y-out"
            >
              Customize your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-800">
                DRIP
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-pink-400 to-purple-800">
                  Custom Threads
                </span>{" "}
                is a platform where you can customize clothing and export the
                styles.
                <br />
                Explore all the customizations that come with{" "}
                <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-pink-400 to-purple-800">
                  Custom Threads.
                </span>
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    href="/playground"
                    className="btn text-white bg-black hover:bg-gray-900 w-full sm:w-auto sm:ml-4 hover:shadow-gradient hover:from-pink-400 hover:to-purple-800"
                  >
                    Check it out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <center>
            <Image
              src="/hero-img.png"
              alt="Hero Image"
              width={800}
              height={100}
            />
          </center>
        </div>
      </div>
    </section>
  );
}
