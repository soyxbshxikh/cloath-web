import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login | Cloath - Fashion Redefined',
  description: 'Log in to your Cloath account to manage your orders, wishlists, and more.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 