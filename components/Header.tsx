import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white">
      <h1 className="font-bold text-2xl">Lopetetaan mopomiitit</h1>
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
