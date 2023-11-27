'use client';
import { childrenNode } from '@/interfaces';
import CustomLayout from './components/CustomLayout';
import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: childrenNode) => {
  return (
    <html>
      <body className={`${inter.className} min-h-screen bg-base-200`}>
        <GoogleOAuthProvider clientId='980184815506-0oibqfpe0ec10rp20pikv50gkhc43e8t.apps.googleusercontent.com'>
          <CustomLayout>{children}</CustomLayout>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
