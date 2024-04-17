import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
}

export default function Custom404() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto p-4 lg:p-24 flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-12">
      <div className="relative w-full lg:w-1/2 h-72 sm:h-[640px] lg:h-[460px]">
        <Image src="/error/404.png" alt="Page not found" sizes="100%" fill />
      </div>

      <div className="w-auto flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center">
        <h1 className="mb-4 text-[#FF1234]">Oops!</h1>
        <h3>{"We can't find the page you were looking for."}</h3>

        <h5 className="mt-4 mb-6 xl:mt-8 xl:mb-12 sub-header-3 text-gray-900/40">
          Error code: 404
        </h5>

        <h5 className="mb-4">Try these options instead:</h5>
        <Link
          className="w-fit px-2 py-1 rounded-lg bg-gray-900/5 hover:text-[#FF1234]"
          href="/"
        >
          Go to homepage
        </Link>
      </div>
    </main>
  )
}
