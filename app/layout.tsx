import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haleema Sadia Maqsood | React Native Developer',
  description: 'Portfolio of Haleema Sadia Maqsood, Software Engineer specializing in React Native and mobile application development.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
