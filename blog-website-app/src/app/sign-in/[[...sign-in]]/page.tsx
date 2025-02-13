"use client"

import Home from "@/app/page";
// import Dashboard from "@/app/dashboard/page";
import { SignIn } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SignInPage() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    console.log("isSignedIn:", isSignedIn);
  }, [isSignedIn]);

  if (!isSignedIn) {
    return <SignIn />;
  }

  return (
    <div>
      {/* <Dashboard /> */}
      <Home />
    </div>
  );
}
