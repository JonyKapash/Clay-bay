import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">ClayBay</h3>
            <p className="text-sm text-gray-600 mb-4">
              A marketplace celebrating ceramic art and the artists who create
              it.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-gray-600 hover:text-primary-dark"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-600 hover:text-primary-dark"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-primary-dark"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-primary-dark">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/vases"
                  className="hover:text-primary-dark"
                >
                  Vases
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/tableware"
                  className="hover:text-primary-dark"
                >
                  Tableware
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/sculptures"
                  className="hover:text-primary-dark"
                >
                  Sculptures
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/planters"
                  className="hover:text-primary-dark"
                >
                  Planters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-dark">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/artists" className="hover:text-primary-dark">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-dark">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/become-seller" className="hover:text-primary-dark">
                  Sell on ClayBay
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-primary-dark">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary-dark">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-dark">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-dark">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-dark">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ClayBay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
