"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const pathname = usePathname();
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

  // Check if we're on a page that should have a white header by default
  const shouldHaveWhiteHeader =
    pathname.startsWith("/products") ||
    pathname.startsWith("/artists") ||
    pathname.startsWith("/categories") ||
    pathname.startsWith("/about");

  // For clarity in the JSX, compute the header style once
  const headerStyle =
    isScrolled || shouldHaveWhiteHeader
      ? "bg-white shadow-md py-3"
      : "bg-transparent py-4";

  // Similarly, compute the text color once
  const textColorStyle =
    isScrolled || shouldHaveWhiteHeader ? "text-primary-dark" : "text-white";

  const navLinkStyle = (isLinkActive: boolean) => {
    if (isLinkActive) {
      return isScrolled || shouldHaveWhiteHeader
        ? "text-primary-dark font-medium"
        : "text-white font-medium";
    } else {
      return isScrolled || shouldHaveWhiteHeader
        ? "text-text hover:text-primary-dark"
        : "text-white/80 hover:text-white";
    }
  };

  const iconButtonStyle =
    isScrolled || shouldHaveWhiteHeader
      ? "hover:bg-secondary-light text-text"
      : "hover:bg-white/10 text-white";

  const navLinks = [
    { name: "דף הבית", href: "/" },
    { name: "חנות", href: "/products" },
    { name: "אמנים", href: "/artists" },
    { name: "אודות", href: "/about" },
  ];

  const categoryLinks = [
    { name: "ספלים וצלוחיות", href: "/categories/mugs-and-plates" },
    { name: "תבניות אפיה", href: "/categories/baking-molds" },
    { name: "קערות", href: "/categories/bowls" },
    { name: "כוסות", href: "/categories/cups" },
    { name: "כלים לבית", href: "/categories/home-items" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${headerStyle}`}
    >
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className={`text-2xl font-bold ${textColorStyle}`}>
            ClayBay
          </Link>

          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${navLinkStyle(
                  isActive(link.href)
                )}`}
              >
                {link.name}
              </Link>
            ))}
            <div ref={categoryDropdownRef} className="relative">
              <button
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
                className={`flex items-center gap-1 transition-colors ${navLinkStyle(
                  false
                )}`}
              >
                קטגוריות{" "}
                <ChevronDown
                  size={16}
                  className={
                    isCategoryDropdownOpen ? "transform rotate-180" : ""
                  }
                />
              </button>
              {isCategoryDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 py-2 animate-fade-in">
                  {categoryLinks.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-text hover:bg-secondary hover:text-primary-dark"
                      onClick={() => setIsCategoryDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="חיפוש"
            className={`p-2 rounded-full transition-colors ${iconButtonStyle}`}
          >
            <Search size={20} />
          </button>

          <Link
            href="/favorites"
            className={`p-2 rounded-full relative transition-colors ${iconButtonStyle}`}
          >
            <Heart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent-error text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </Link>

          <Link
            href="/cart"
            className={`p-2 rounded-full relative transition-colors ${iconButtonStyle}`}
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-accent-error text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>

          <Link
            href="/dashboard"
            className={`p-2 rounded-full hidden md:flex transition-colors ${iconButtonStyle}`}
          >
            <User size={20} />
          </Link>

          <button
            className={`md:hidden p-2 ${
              isScrolled || shouldHaveWhiteHeader ? "text-text" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="תפריט"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in absolute top-full right-0 left-0">
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

              <div className="py-2">
                <button
                  onClick={() =>
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                  }
                  className="flex items-center gap-1 w-full text-right hover:text-primary-dark mb-2"
                >
                  קטגוריות{" "}
                  <ChevronDown
                    size={16}
                    className={
                      isCategoryDropdownOpen ? "transform rotate-180" : ""
                    }
                  />
                </button>
                {isCategoryDropdownOpen && (
                  <div className="pr-4 border-r border-secondary-dark">
                    {categoryLinks.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block py-2 text-text hover:text-primary-dark"
                        onClick={() => {
                          setIsCategoryDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/dashboard"
                className="py-2 hover:text-primary-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                חשבון
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
