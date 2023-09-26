import Link from "next/link"
import React from "react"

import { appOwner, version } from "../package.json" assert { type: "json" }

const Footer = () => {
  return (
    <div
      className={`bg-white flex flex-col items-center justify-center p-5 shadow-lg`}
    >
      <Link className="flex items-center" href="/">
        <h1 className="font-[Poppins] font-bold text-xl">Lopetetaan mopomiitit</h1>
      </Link>
      <p className="font-[Poppins] font-normal text-md md:text-lg mt-3">
        © {new Date().getFullYear()}{" "}
        <Link
          className="hover:px-2 hover:py-1 hover:my-3 hover:rounded-lg hover:bg-[#1741ef] hover:text-white hover:-sm transition-all duration-200 ease-in-out"
          href="https://www.jessekeskela.fi"
          target="_blank"
        >
          {appOwner}
        </Link>
      </p>
      <p className="font-[Poppins] font-normal text-md md:text-lg text-gray-500">
        Sovellusversio: {version}
      </p>
    </div>
  )
}

export default Footer