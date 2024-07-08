import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full relative bottom-0">
        <div className="container mx-auto px-4 text-center">
            <p>
                © {new Date().getFullYear()} Adamah. All rights reserved.
            </p>
            <nav className="mt-2">
                <ul className="flex justify-center space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                    {/* <li><a href="/privacy-policy" className="hover:underline">Privacy</a></li> */}
                </ul>
            </nav>
        </div>
    </footer>
  );
};

export default Footer;