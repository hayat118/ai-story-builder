import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not defined");
}

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <NextUIProvider>{children}</NextUIProvider>
    </ClerkProvider>
  );
}

export default Provider;
