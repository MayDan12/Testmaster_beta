"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">TestMaster</h3>
            <p className="mb-4">
              Empowering educators and students with innovative assessment
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook className="w-6 h-6 hover:text-[#3a0096] transition-colors" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <Twitter className="w-6 h-6 hover:text-[#3a0096] transition-colors" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram className="w-6 h-6 hover:text-[#3a0096] transition-colors" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <Youtube className="w-6 h-6 hover:text-[#3a0096] transition-colors" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="hover:text-[#3a0096] transition-colors"
                >
                  System Status
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="w-full bg-[#3a0096] hover:bg-[#260063]"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p>&copy; {currentYear} TestMaster. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link
              href="/terms"
              className="hover:text-[#3a0096] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#3a0096] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-[#3a0096] transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
