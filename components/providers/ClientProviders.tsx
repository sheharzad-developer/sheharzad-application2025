"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ClientProviders;
