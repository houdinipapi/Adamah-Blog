import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adamah",
  description: "Blog Website App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={raleway.className}>
          
          {children}

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

        </body>
      </html>
    </ClerkProvider>
  );
}
