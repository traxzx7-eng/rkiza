'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'الرئيسية', href: '/' },
    { label: 'خدماتنا', href: '/services' },
    { label: 'القطاعات', href: '/sectors' },
    { label: 'التوظيف', href: '/careers' },
    { label: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-charcoal-800/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section (Right Side in RTL) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                className="h-16 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" 
                alt="الركيزة الدائمة" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-reverse space-x-8 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href && link.href !== '/' ? true : pathname === '/' && link.href === '/' ? true : false;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive ? 'border-accent-500 font-bold' : 'border-transparent hover:border-accent-500'
                  } text-charcoal-800 border-b-2 transition-all px-1 py-2 text-sm font-medium`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal-800 hover:text-primary-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark absolute w-full text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
