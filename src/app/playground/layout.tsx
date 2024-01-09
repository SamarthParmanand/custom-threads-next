import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playground | Custom Threads",
  description: "Try out your customizations here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grow">
        <Link href="/" className="px-4 py-2 absolute text-white bg-neutral-900 rounded-lg top-5 left-5 w-max flex items-center z-10">
          <svg
            className="w-3 h-3 fill-current text-gray-400 shrink-0 -ml-1 mr-2 rotate-180"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
              fillRule="nonzero"
              />
          </svg>
              Go Back{" "}
        </Link>
        {children}
      </main>
    </>
  );
}
