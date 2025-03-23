import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <Link href="/">
            Logo
            </Link>
            <p className="text-sm max-w-xs">
              Lorem ipsum is a dummy or placeholder text commonly used in design
              and publishing.
            </p>
          </div>

          {/* Quick Links Sections */}
          <QuickLinks title="Quick Links" />
          <QuickLinks title="Resources" />
          <QuickLinks title="Support" />

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon href="#" src="/icons/facebook.svg" alt="Facebook" />
              <SocialIcon href="#" src="/icons/twitter.svg" alt="Twitter" />
              <SocialIcon href="#" src="/icons/instagram.svg" alt="Instagram" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ParentMe360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Quick Links Component
const QuickLinks = ({ title }:{title:string}) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="space-y-2">
      <li><Link href="/" className="hover:underline">Home</Link></li>
      <li><Link href="/about" className="hover:underline">About</Link></li>
      <li><Link href="/articles" className="hover:underline">Articles</Link></li>
      <li><Link href="/contact" className="hover:underline">Contact</Link></li>
    </ul>
  </div>
);

// Social Icon Component
const SocialIcon = ({ href }:{href:string,src:string,alt:string}) => (
  <Link href={href} className="hover:opacity-80 transition">
    
  </Link>
);

export default Footer;