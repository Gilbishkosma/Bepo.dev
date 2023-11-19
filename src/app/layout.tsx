import { childrenNode } from '@/interfaces';
import CustomLayout from './components/CustomLayout';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hashibira',
  description: 'Platform to upload funny gaming clips',
};

const RootLayout = ({ children }: childrenNode) => {
  return (
    <html>
      <body className={`${inter.className} min-h-screen bg-base-200`}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
};

export default RootLayout;
