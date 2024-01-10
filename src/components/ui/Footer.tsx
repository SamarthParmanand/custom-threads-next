import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 mb-8 sm:px-6 flex justify-between items-center">
            <div className="mb-2 flex items-center">
              <Logo />
              <span className="px-3 text-xl md:text-4xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-pink-400 to-purple-800">
                  Custom Threads
                </span>
            </div>
          <div className="text-neutral-600 md:mr-4 text-sm md:text-xl">
            &copy; Samarth Parmamand. All rights reserved.
          </div>

      </div>
    </footer>
  );
}
