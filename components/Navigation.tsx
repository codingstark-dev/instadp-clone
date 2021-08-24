import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <header>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4 font-bold">
          {' '}
          Insta<span className="text-blue-500 font-bold">Dp</span>
        </a>
      </Link>
      {/* <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link> */}
    </header>
  );
};

export default Navigation;
