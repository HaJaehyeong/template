import { Inter } from 'next/font/google';
import '../../globals.scss';
import Navigation from './_components/navigation/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function HowToUseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
