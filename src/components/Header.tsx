'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 왼쪽 로고/이름 */}
        <Link href="/" className="text-2xl font-extrabold text-gray-900">
          sanggeon.dev
        </Link>

        {/* 오른쪽 메뉴 */}
        <nav className="space-x-30 text-sm font-medium">
          <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="#projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
