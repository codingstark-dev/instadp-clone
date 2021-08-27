import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import RouteNavBar from './RouteNavBar';

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
          <div className="flex items-center justify-between py-4 shadow-sm px-4 max-w-7xl m-auto ">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <RouteNavBar />
      <main className="font-poppins">
        <div className="max-w-5xl px-3 mx-auto">{children}</div>
      </main>
      <footer className="py-8 font-poppins shadow-inner">
        {/* <hr className="w-48 text-center flex justify-center" /> */}
        <div className="max-w-5xl px-1 mx-auto text-center  ">
          Developed By
          <span className="text-blue-500 font-bold">
            <a href="https://codingstark.com/portfolio" rel="sponsored">
              {' '}
              codingstark
            </a>{' '}
          </span>{' '}
          &nbsp; Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 m-auto "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          in India
        </div>
        <div className="max-w-5xl px-3 mx-auto text-center">
          © 2020-2021 InstaVideoSave
          <span className="text-blue-500 font-bold">.Net</span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
