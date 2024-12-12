import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'An app to keep track of all there is todo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-background`}>
        <header className="flex items-center justify-center h-48 bg-dark-gray">
          <div id="logo" className="flex gap-4">
            <Image src="/logo.svg" alt="todo app logo" width={22} height={36} />
            <h1 className="text-5xl font-black">
              <span className="text-primary">Todo</span>{' '}
              <span className="text-secondary">App</span>
            </h1>
          </div>
        </header>
        <main className="container flex justify-center px-4">
          <div className="w-[46rem]">{children}</div>
        </main>
      </body>
    </html>
  );
}
