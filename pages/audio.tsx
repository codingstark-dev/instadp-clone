// import { format, parseISO } from 'date-fns';

import React, { ChangeEvent } from 'react';
import Layout from '../components/Layout';
// import { getAllPosts } from '../lib/api';
import { useState } from 'react';
// import { PostType } from '../types/post';
import SvgComponent from './../components/SvgLoader';
import Link from 'next/link';
import { SiteDetails } from '../utils/setup';
import { MetaProps } from '../types/layout';
import AdSense from 'react-ssr-adsense';

// type IndexProps = {
//   posts: PostType[];
// };
// { posts }: IndexProps
export const Audio = (): JSX.Element => {
  const [inputUrl, setinputUrl] = useState('');
  const [errorBol, seterrorBol] = useState(false);
  const [loading, setloading] = useState(false);
  const [dataUrl, setdataUrl] = useState(undefined);

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
      // console.log(result.test('https://www.instagram.com/tv/B_2J3OkAHzJ/'));
      const myHeaders = new Headers();
      myHeaders.append('url', inputUrl as string);

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const data = await fetch(
        `${SiteDetails.api}/allinone`,
        requestOptions
      ).then((response) => {
        setloading(false);
        return response.json();
      });
      if (data == 'link' || data.image?.length == 0) {
        seterrorBol(true);
      } else {
        seterrorBol(false);
      }
      setdataUrl(data);
    }
  };
  const customMeta: MetaProps = {
    title: SiteDetails.audio.title,
    description: SiteDetails.audio.description,
  };
  return (
    <Layout customMeta={customMeta}>
      <div className="max-w-2xl m-auto text-center">
        <h1 className="font-bold text-2xl mb-1 mt-2">
          Download Instagram Reels
        </h1>
        <p className="opacity-80">
          Download Instagram Reels video with our Reels Downloader
        </p>
        <AdSense
          client={SiteDetails.pub_id}
          slot={SiteDetails.slot1}
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        />
        <div className="text-gray-600 shadow-md rounded-lg border-[1px] dark:bg-gray-200 flex">
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Enter Video Url To Convert Audio."
            className="bg-transparent w-full pl-3 h-14  rounded-full text-sm focus:outline-none text-black "
          />
          <button
            type="submit"
            onClick={handleButton}
            className=" mt-3 mr-3 bg-indigo-600  w-[94px] flex justify-center h-8 items-center rounded text-white"
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
            Please Enter Valid Url..
          </div>
        ) : (
          ''
        )}
        <br />
        {loading == true ? <SvgComponent /> : ''}

        {dataUrl != undefined
          ? dataUrl.video?.map((e, index) => {
              return (
                <div className="flex flex-wrap justify-center m-5" key={index}>
                  <audio controls key={e}>
                    <source
                      src={`${SiteDetails.api}/dl?url=${encodeURIComponent(
                        e
                      )}&type=${'mp3'}&title=${Math.floor(
                        Math.random() * 100000000000
                      )}`}
                      type="audio/mp3"
                    />
                  </audio>
                  <Link
                    href={`${SiteDetails.api}/dl?url=${encodeURIComponent(
                      e
                    )}&type=${'mp3'}&title=${Math.floor(
                      Math.random() * 100000000000
                    )}`}
                  >
                    <button className="mt-3 bg-indigo-600  w-[160px] flex justify-center h-8 items-center rounded text-white">
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
                      <span className="text-sm mr-1">Download Audio</span>
                    </button>
                  </Link>
                </div>
              );
            })
          : ''}
        <AdSense
          client={SiteDetails.pub_id}
          slot={SiteDetails.slot2}
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        />
      </div>
    </Layout>
  );
};

export default Audio;
