import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="py-8 font-poppins shadow-inner max-w-2xl m-auto  text-sm  ">
      <div className="flex justify-evenly  font-semibold  " >
        <span>
          <a href="/">Home</a>
        </span> |
        <span>
          <a href="/terms-and-conditions">Terms And Conditions</a>
        </span> |
        <span>
          <a href="/privacy-policy">Privacy Policy</a>
        </span>
      </div>
      <div className="flex justify-center py-3">
        {' '}
        <hr className="w-48 text-center flex justify-center" />
      </div>{' '}
      <div className="max-w-5xl px-1 mx-auto text-center  ">
        Developed By
        <span className="text-blue-500 font-bold">
          <a href="https://codingstark.com/portfolio" rel="sponsored">
            {' '}
            codingstark
          </a>{' '}
        </span>{' '}
        Made with
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
  );
};

export default Footer;
