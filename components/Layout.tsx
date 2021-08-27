import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

import { NextRouter, useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const router: NextRouter = useRouter();

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
      <ul className=" flex  space-x-4 font-semibold p-4 font-poppins overflow-x-scroll lg:overflow-auto ">
        <li className="text-center ">
          <a
            href="/"
            className={
              router.pathname == '/'
                ? ' hover:text-blue-400 text-blue-500 dark:hover:text-blue-300'
                : ' hover:text-blue-400  dark:hover:text-blue-300'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            <span>Reels</span>
          </a>
        </li>
        <li className="text-center ">
          <a
            href="/profile"
            className={
              router.pathname == '/profile'
                ? ' hover:text-blue-400 text-blue-500 dark:hover:text-blue-300'
                : ' hover:text-blue-400  dark:hover:text-blue-300'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Profile</span>
          </a>
        </li>

        <li className="text-center ">
          <a
            href="/stories"
            className={
              router.pathname == '/stories'
                ? ' hover:text-blue-400 text-blue-500 dark:hover:text-blue-300'
                : ' hover:text-blue-400  dark:hover:text-blue-300'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Stories</span>
          </a>
        </li>
        <li className="text-center">
          <a
            href="/audio"
            className={
              router.pathname == '/audio'
                ? ' hover:text-blue-400 text-blue-500 dark:hover:text-blue-300'
                : ' hover:text-blue-400  dark:hover:text-blue-300'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            <span>Audio</span>
          </a>
        </li>
        <li className="text-center">
          <a
            href=""
            className={
              router.pathname == '/photo'
                ? ' hover:text-blue-400 text-blue-500 dark:hover:text-blue-300'
                : ' hover:text-blue-400  dark:hover:text-blue-300'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Photo</span>
          </a>
        </li>
        <li className="text-center">
          <a
            href="/video"
            className={
              router.pathname == '/video'
                ? ' hover:text-blue-400 text-blue-500 dark:hover:text-blue-300'
                : ' hover:text-blue-400  dark:hover:text-blue-300'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>Video</span>
          </a>
        </li>
        <li className="text-center ">
          <a
            href="/igtv"
            className={
              router.pathname == '/igtv'
                ? ' hover:text-blue-400 text-blue-500 dark:hover:text-blue-300'
                : ' hover:text-blue-400  dark:hover:text-blue-300'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span className="m-auto">IGTV</span>
          </a>
        </li>
      </ul>

      <main className="font-poppins">
        <div className="max-w-5xl px-3 mx-auto">{children}</div>
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
