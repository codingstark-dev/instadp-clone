import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="mx-auto font-poppins">
          <div className="flex items-center justify-between py-4 shadow-sm px-4 ">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main className="font-poppins">
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8 font-poppins">
        <div className="max-w-5xl px-8 mx-auto">
          Insta<span className="text-blue-500 font-bold">Dp</span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
