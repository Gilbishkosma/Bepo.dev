'use client';
import { childrenNode } from '@/interfaces';
import CustomLayout from './components/CustomLayout';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: childrenNode) => {
  return (
    <html>
      <body className={`${inter.className} min-h-screen`}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
};

export default RootLayout;
