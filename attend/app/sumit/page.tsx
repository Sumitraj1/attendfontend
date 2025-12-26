import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AttendEase</h2>
          <p className="text-sm text-primary-light leading-relaxed">
            Smart & simple attendance management system for schools.
            Track students, manage classes, and analyze attendance easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-teal-400 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-teal-400 transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-teal-400 transition">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/help" className="hover:text-teal-400 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-teal-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-teal-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-light">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              support@attendease.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 90000 00000
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              India
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-dark" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-light">
          © {new Date().getFullYear()} AttendEase. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link href="#" className="hover:text-teal-400 transition">
            <Facebook size={18} />
          </Link>
          <Link href="#" className="hover:text-teal-400 transition">
            <Instagram size={18} />
          </Link>
          <Link href="#" className="hover:text-teal-400 transition">
            <Linkedin size={18} />
          </Link>
          <Link href="#" className="hover:text-teal-400 transition">
            <Twitter size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
