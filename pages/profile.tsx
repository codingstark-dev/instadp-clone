// import { format, parseISO } from 'date-fns';

import React, { ChangeEvent } from 'react';
import Layout from '../components/Layout';
// import { getAllPosts } from '../lib/api';
import { useState } from 'react';
// import { PostType } from '../types/post';
import Link from 'next/link';
import SvgComponent from '../components/SvgLoader';
import { MetaProps } from '../types/layout';

// type IndexProps = {
//   posts: PostType[];
// };
// { posts }: IndexProps
export const Profile = (): JSX.Element => {
  const [inputUrl, setinputUrl] = useState('');
  const [errorBol, seterrorBol] = useState(false);
  const [loading, setloading] = useState(false);
  const [dataUrl, setdataUrl] = useState(null);

  const handleSearch = (event: ChangeEvent) => {
    event.preventDefault();
    setinputUrl(event.target['value']);

    // console.log(inputUrl);

    //  `https://bot.instasaved.net/proxy.php/?url=`;
  };

  const handleButton = async () => {
    // const instaReg =
    //   '(https?://(?:www.)?instagram.com/p/([^/?#&]+)).*|(https?://(?:www.)?instagram.com/reel/([^/?#&]+)).*|(https?://(?:www.)?instagram.com/tv/([^/?#&]+)).*';
    // const result = RegExp(instaReg, 'g');
    if (inputUrl) {
      setloading(true);
      const myHeaders = new Headers();
      myHeaders.append('username', inputUrl as string);

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const data = await fetch(
        'https://api-insta-zswvj.ondigitalocean.app/profile',
        requestOptions
      ).then((response) => {
        setloading(false);

        return response.json();
      });
      if (data.image?.length == 0 && data?.image == undefined) {
        seterrorBol(true);
      } else {
        seterrorBol(false);
      }

      setdataUrl(data);

      // console.log(result.test('https://www.instagram.com/tv/B_2J3OkAHzJ/'));
    }
  };
 const customMeta: MetaProps = {
   title: `Instagram Profile Picture Downloader & Instadp Viewer`,
   description: 'Instagram Profile Picture Downloader & Instadp Viewer',
   type: 'article',
 };
  return (
    <Layout customMeta={customMeta}>
      <div className="max-w-2xl m-auto">
        <h1 className="font-bold text-2xl mb-1 mt-2">
          Instagram DP Downloader
        </h1>
        <p className="opacity-80">
          Download Instagram profile (dp) online for free.
        </p>
        <div className="relative text-gray-600 shadow-md rounded-lg border-[1px] dark:bg-gray-200">
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Enter Username Eg. wwe"
            className="bg-transparent w-full h-14 px-3 pr-10 rounded-full text-sm focus:outline-none "
          />
          <button
            type="submit"
            onClick={handleButton}
            className="absolute right-0 top-0 mt-3 mr-3 bg-blue-600 w-[94px] flex justify-center h-8 items-center rounded text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm mr-1">Download</span>
          </button>
        </div>
        {errorBol ? (
          <div className="text-red-500 text-center font-semibold mt-1">
            Please Enter Valid Username..
          </div>
        ) : (
          ''
        )}
        <br />
        {loading ? <SvgComponent /> : ''}
        {dataUrl?.image != undefined ? (
          <div className="flex justify-center m-5 flex-wrap">
            <img src={dataUrl.image} className=" rounded-lg"></img>
            <Link
              href={`https://api-insta-zswvj.ondigitalocean.app/dl?url=${encodeURIComponent(
                dataUrl.image
              )}&type=${'png'}&title=${Math.floor(
                Math.random() * 100000000000
              )}`}
            >
              <button className="mt-3 bg-blue-600 w-[160px] flex justify-center h-8 items-center rounded text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm mr-1">Download Image</span>
              </button>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="prose font-poppins">
        <h2>Download Instagram profile picture online</h2>
        <p>
          {' '}
          Instavideosave.net offers a free web-based tool which allows you to
          download Instagram profile picture or dp, it's a quick and easy way to
          get your Instagram dp or profile picture downloaded offline to your
          device.{' '}
        </p>
        <p>
          Instagram is without a doubt one of the most popular social networking
          platforms with over 1 billion monthly active users. If you ever wanted
          to download instagram dp or instagram profile photo of yours and other
          instagram users, you can do it right from your mobile, tablet, iPhone
          or iPad, or any other device and it’s a lot easier than you think.
        </p>
        <h2>How to download instagram profile photo(dp)?</h2>
        <p>
          Follow below steps to download your Instagram dp or profile photo to
          your mobile, tablet, pc or iOS:-
        </p>
        <ol>
          <li>Open "Instavideosave.net".</li>
          <li>Type Username or paste Profile link in input field.</li>
          <li>Click "Download" button,</li>
          <li>Done, your profile picture has been downloaded.</li>
        </ol>
        <br />
      </div>
    </Layout>
  );
};


export default Profile;
