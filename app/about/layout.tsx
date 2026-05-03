import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Woodtech Ply',
}

interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps): React.ReactNode {
  return children
}
