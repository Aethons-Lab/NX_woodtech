import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Woodtech Ply',
}

interface ContactLayoutProps {
  children: React.ReactNode
}

export default function ContactLayout({ children }: ContactLayoutProps): React.ReactNode {
  return children
}
