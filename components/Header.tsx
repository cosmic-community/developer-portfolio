import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-semibold">Developer Portfolio</a>
        </Link>
        <nav>
          <a href="#projects" className="mr-4 text-sm text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#skills" className="mr-4 text-sm text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900">Testimonials</a>
        </nav>
      </div>
    </header>
  )
}