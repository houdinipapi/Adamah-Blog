import Link from 'next/link';
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import About from '@/app/about/page';

const Header = () => {
  return (
    <div className='bg-gray-600 text-neutral-100'>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">Home</Link>
        <div className='flex items-center gap-4'>
          <SignedIn>
            <Link href="about">About</Link>
            <Link href="dashboard">Dashboard</Link>
            <Link href="contact">Contact</Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className='flex items-center gap-4'>
              <Link href="/sign-up">Sign up</Link>
              <Link href="/sign-in">Log in</Link>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default Header;
