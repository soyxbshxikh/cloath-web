import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign Up | Cloth - Fashion Redefined',
  description: 'Create a new account with looksay to enjoy a personalized shopping experience.',
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 