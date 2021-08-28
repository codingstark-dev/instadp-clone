// import { format, parseISO } from 'date-fns';

import React, { ChangeEvent } from 'react';
import Layout from '../components/Layout';
// import { getAllPosts } from '../lib/api';
import { useState } from 'react';
// import { PostType } from '../types/post';
import DisplayPage from './../components/DisplayDlpage';
import SvgComponent from './../components/SvgLoader';

// type IndexProps = {
//   posts: PostType[];
// };
// { posts }: IndexProps
export const Video = (): JSX.Element => {
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

  return (
    <Layout>
      <div className="max-w-2xl m-auto text-center">
        <h1 className="font-bold text-2xl mb-1 mt-2">
          Download Instagram Reels
        </h1>
        <p className="opacity-80">
          Download Instagram Reels video with our Reels Downloader
        </p>
        <div className="relative text-gray-600 shadow-md rounded-lg border-[1px] dark:bg-gray-200 flex">
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Enter Reels/Video/IGTV Url ..."
            className="bg-transparent w-[22em] lg:w-[40em] px-3 h-14 pr-10 rounded-full text-sm focus:outline-none text-black "
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

        {/* <video controls className="m-1 rounded-lg">
        <source src={data} />
      </video> */}
        {/* 

      <h1>Home Page</h1>
      <p>Next.js starter for your next blog or personal site. Built with:</p>
      <ul className="list-disc pl-4 my-6">
        <li>Next.js</li>
        <li className="mt-2">Typescript</li>
        <li className="mt-2">MDX</li>
        <li className="mt-2">Tailwind CSS</li>
      </ul>

      <a
        href="https://github.com/ChangoMan/nextjs-typescript-mdx-blog"
        className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
      >
        Get the source code!
      </a>

      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))} */}
      </div>
    </Layout>
  );
};

export default Video;
