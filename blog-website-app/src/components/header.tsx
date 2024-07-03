import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-600 text-neutral-100'>
        <div className="container mx-auto flex items-center justify-between py-4">
            <Link href="/">Home</Link>

            <div>
                <div className='flex items-center gap-4'>
                    <Link href="/sign-up">Sign up</Link>
                    <Link href="/login">Log in</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header