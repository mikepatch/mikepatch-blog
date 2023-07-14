import { Inter } from 'next/font/google';

import '../styles/main.scss';
import Theme from '@/components/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MikePatch blog',
  description: 'A front-end development blog.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
