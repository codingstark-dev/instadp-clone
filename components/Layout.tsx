import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import RouteNavBar from './RouteNavBar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  navbar?: boolean;
};


const Layout = ({ children, customMeta, navbar }: LayoutProps): JSX.Element => {
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
      {navbar ? '' : <RouteNavBar />}

      <main className="font-poppins">
        <div className="max-w-5xl px-3 mx-auto">{children}</div>
      </main>
   <Footer />
    </>
  );
};

export default Layout;
