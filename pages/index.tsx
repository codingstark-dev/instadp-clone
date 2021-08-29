// import { format, parseISO } from 'date-fns';

import React, { ChangeEvent } from 'react';
import Layout from '../components/Layout';
// import { getAllPosts } from '../lib/api';
import { useState } from 'react';
// import { PostType } from '../types/post';
import DisplayPage from './../components/DisplayDlpage';
import SvgComponent from './../components/SvgLoader';
import { MetaProps } from '../types/layout';

// type IndexProps = {
//   posts: PostType[];
// };
// { posts }: IndexProps
export const Index = (): JSX.Element => {
  const [inputUrl, setinputUrl] = useState('');
  const [errorBol, seterrorBol] = useState(false);
  const [loading, setloading] = useState(false);
  const [dataUrl, setdataUrl] = useState('null');
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
      myHeaders.append('url', inputUrl as string);

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const data = await fetch(
        'https://api-insta-zswvj.ondigitalocean.app/allinone',
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

      // console.log(result.test('https://www.instagram.com/tv/B_2J3OkAHzJ/'));
      // router.replace(`/?url=${inputUrl}`).then(() => {
      //   setloading(false);
      // });
    }
  };
 const customMeta: MetaProps = {
   title: `Instagram Reels Downloader - Save Reels Videos Online`,
   description: ' Instagram Reels Downloader - Save Reels Videos Online',
   type: 'article',
 };
  return (
    <Layout customMeta={customMeta}>
      <div className="max-w-2xl m-auto ">
        <h1 className="font-bold text-2xl mb-1 mt-2">
          Instagram Reels Downloader
        </h1>
        <p className="opacity-80">Download Instagram videos online for free.</p>
        <div className="relative text-gray-600 shadow-md rounded-lg border-[1px] dark:bg-gray-200 flex">
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Enter Reels/Video/IGTV Url ..."
            className="bg-transparent sm:w-[18em] w-[20em]  lg:w-[40em] px-3 h-14 pr-10 rounded-full text-sm focus:outline-none text-black "
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
            Please Enter Valid Url..
          </div>
        ) : (
          ''
        )}
        <br />
        {loading ? <SvgComponent /> : ''}
        <DisplayPage data={dataUrl} type="mp4" />
        <div className="nuxt-content prose font-poppins dark:prose-dark">
          <h2 id="instagram-reels-video-download-online---reels-video-downloader">
            <a
              aria-hidden="true"
              href="#instagram-reels-video-download-online---reels-video-downloader"
              tabIndex={-1}
            >
              <span className="icon icon-link" />
            </a>
            Instagram reels video download online - reels video downloader
          </h2>
          <p>
            Instavideosave.net is an online free and fast tool which helps you
            to download instagram reels video or to save reels video to your
            device. You can save any reels videos in computer or phone gallery
            and view them offline anytime.
          </p>

          <p>
            We do not require any information for accessinng our tool, so you
            don't need to worry about providing your login details. Also we do
            not charge anything for using our service this is lifetime free
            service, which can be used to download unlimited amount of reels
            videos.
          </p>
          <p>
            <strong>Key features:</strong>
          </p>
          <ul>
            <li>Original quality, which most of the tools out there can't.</li>
            <li>
              Download Instagram Reel videos on any devices that you want:
              mobile, PC, or tablet.
            </li>
            <li>
              Download by using your browsers: We want to keep things simple for
              you. No need to download or install any software. Use our website
              for downloading instagram reela video it's fun!
            </li>
            <li>
              It's always free. We only place some ads, which support
              maintaining our services, and further development.
            </li>
          </ul>
          <h2 id="how-to-download-instagram-reels-video-online">
            <a
              aria-hidden="true"
              href="#how-to-download-instagram-reels-video-online"
              tabIndex={-1}
            >
              <span className="icon icon-link" />
            </a>
            How To download Instagram Reels video online?
          </h2>
          <p>
            if you are looking for a tool to download reels videos from
            Instagram? if so, then download your favorite videos by using the
            online Instagram reels Video downloader tool. Anyone can get
            benefits using this tool. It is a super-fast reels video downloading
            tool that takes less time to download Video from instagram. You need
            to copy the link to your favorite instagram reels video and paste
            that copied Link into the instavideosave input box for downloading.
          </p>
          <p>
            <strong>Steps:</strong>
          </p>
          <ol>
            <li>Copy link/Url of the Reels video that you want to download.</li>
            <li>Paste Url into input box.</li>
            <li>Click "Download" button,</li>
            <li>Done. Your video has been downloaded.</li>
          </ol>
          <h3 id="how-to-copy-instagram-reels-video-link">
            <a
              aria-hidden="true"
              href="#how-to-copy-instagram-reels-video-link"
              tabIndex={-1}
            >
              <span className="icon icon-link" />
            </a>
            How To Copy Instagram Reels Video link?
          </h3>
          <ol>
            <li>Open your Instagram app.</li>
            <li>Choose the Reels video that you want to download.</li>
            <li>
              Click Three dots : at the bottom of video, find Copy Link button.
            </li>
            <li>
              Click on Copy Link button and the video url/link has been copied.
            </li>
          </ol>
          <h2 id="how-to-download-instagram-private-reels-video">
            <a
              aria-hidden="true"
              href="#how-to-download-instagram-private-reels-video"
              tabIndex={-1}
            >
              <span className="icon icon-link" />
            </a>
            How to download Instagram private reels video?
          </h2>
          <p>
            Downloading Reels videos is just a simple stuff, but when i comes to
            download private instagram reels this is little challenging.
            Instagram doesn't allow everyone to access private videos, photos or
            reels thatswhy instavideosave tool cannot able to extract or
            download private reels videos.
          </p>
          <p>
            <strong>DMCA:</strong> Instavideosave.net complies with 17 U.S.C. *
            512 and the Digital Millennium Copyright Act (DMCA). It is our
            policy to respond to any infringement notices and take appropriate
            actions. If your copyrighted material has been posted on the site
            and you want this material removed, Contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
