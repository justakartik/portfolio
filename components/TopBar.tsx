import Link from 'next/link'

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-bold">JustaKartik</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="https://github.com/justakartik" className="text-white hover:text-blue-400 transition-colors">Github</Link></li>
              <li><Link href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

