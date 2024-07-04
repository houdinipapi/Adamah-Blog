"use client"

import Dashboard from "@/app/dashboard/page";
import { SignUp } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SignUpPage() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    console.log("isSignedIn:", isSignedIn);
  }, [isSignedIn]);

  if (!isSignedIn) {
    return <SignUp />;
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
}
