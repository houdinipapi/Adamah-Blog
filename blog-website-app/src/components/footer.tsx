import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed w-full bottom-0">
        <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Adamah. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;