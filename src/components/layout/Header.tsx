"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Artists", href: "/artists" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-2xl font-bold ${
              isScrolled ? "text-primary-dark" : "text-white"
            }`}
          >
            ClayBay
          </Link>

          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? isScrolled
                      ? "text-primary-dark font-medium"
                      : "text-white font-medium"
                    : isScrolled
                    ? "text-text hover:text-primary-dark"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "hover:bg-secondary-light text-text"
                : "hover:bg-white/10 text-white"
            }`}
          >
            <Search size={20} />
          </button>

          <Link
            href="/favorites"
            className={`p-2 rounded-full relative transition-colors ${
              isScrolled
                ? "hover:bg-secondary-light text-text"
                : "hover:bg-white/10 text-white"
            }`}
          >
            <Heart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent-error text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </Link>

          <Link
            href="/cart"
            className={`p-2 rounded-full relative transition-colors ${
              isScrolled
                ? "hover:bg-secondary-light text-text"
                : "hover:bg-white/10 text-white"
            }`}
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-accent-error text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>

          <Link
            href="/dashboard"
            className={`p-2 rounded-full hidden md:flex transition-colors ${
              isScrolled
                ? "hover:bg-secondary-light text-text"
                : "hover:bg-white/10 text-white"
            }`}
          >
            <User size={20} />
          </Link>

          <button
            className={`md:hidden p-2 ${
              isScrolled ? "text-text" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in absolute top-full left-0 right-0">
          <div className="container-wide py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-2 ${
                    isActive(link.href)
                      ? "text-primary-dark font-medium"
                      : "hover:text-primary-dark"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/dashboard"
                className="py-2 hover:text-primary-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
