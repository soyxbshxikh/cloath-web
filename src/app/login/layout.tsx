import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login | Looksay - Fashion Redefined',
  description: 'Log in to your looksay account to manage your orders, wishlists, and more.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 