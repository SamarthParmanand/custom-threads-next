'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './Logo'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className=" md:max-w-6xl mx-auto px-3 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 w-[100vw] md:w-full">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="flex md:flex md:grow mr-7">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/playground" className="btn-sm text-gray-200 bg-black hover:bg-gray-900 md:ml-3">
                  <span>Playground</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
