import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container-wide py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">ClayBay</h3>
            <p className="text-sm text-gray-600 mb-4">
              שוק המציג אמנות קרמית ואת האמנים שיוצרים אותה.
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
            <h4 className="font-medium mb-4">קטגוריות</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/mugs-and-plates"
                  className="hover:text-primary-dark"
                >
                  ספלים וצלוחיות
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/baking-molds"
                  className="hover:text-primary-dark"
                >
                  תבניות אפיה
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/bowls"
                  className="hover:text-primary-dark"
                >
                  קערות
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/cups"
                  className="hover:text-primary-dark"
                >
                  כוסות
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/home-items"
                  className="hover:text-primary-dark"
                >
                  כלים לבית
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">עמודים</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-dark">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-dark">
                  חנות
                </Link>
              </li>
              <li>
                <Link href="/artists" className="hover:text-primary-dark">
                  אמנים
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-dark">
                  אודות
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} ClayBay. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
