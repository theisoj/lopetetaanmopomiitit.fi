import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white font-[Poppins]">
      <h1 className="font-bold text-xl whitespace-pre-wrap flex flex-col sm:flex-row items-start justify-center sm:items-center sm:justify-start">
        lopetetaan
        <span className="text-[#1741ef] sm:text-black text-sm leading-4 sm:leading-5 sm:text-xl">
          mopomiitit.fi
        </span>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-600">
              Etusivu
            </Link>
          </li>
          <li>
            <Link href="#tietoa" className="hover:text-gray-600">
              Tietoa
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
