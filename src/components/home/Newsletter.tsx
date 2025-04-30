"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-primary-dark text-white">
      <div className="container-narrow text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-3">
          Join Our Community
        </h2>
        <p className="text-primary-light mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter to receive updates on new ceramic
          collections, artist features, and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-full text-text focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading || isSubmitted}
              required
            />
            <button
              type="submit"
              disabled={isLoading || isSubmitted}
              className="bg-white text-primary-dark px-6 py-3 rounded-r-full font-medium hover:bg-opacity-90 transition-colors flex items-center"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-dark"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Joining
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center">
                  <Check size={18} className="mr-1" />
                  Joined
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe
                  <ArrowRight size={18} className="ml-1" />
                </span>
              )}
            </button>
          </div>

          {isSubmitted && (
            <p className="text-sm mt-3 text-primary-light animate-fade-in">
              Thank you for subscribing! Watch for ceramic inspiration in your
              inbox.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
