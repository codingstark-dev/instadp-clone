import Link from 'next/link';
import React from 'react';

interface props {
  data: any;
  type:any
}
const DisplayPage = (data:props) => {
  console.log(data);
  return (
    <div>
      {data.data?.video?.length != 0
        ? data.data?.video?.map((e, index) => {
            return (
              <div className="flex flex-wrap justify-center m-5" key={index}>
                <video controls className="rounded-lg" key={e}>
                  <source
                    src={
                      `https://bot.instasaved.net/proxy.php/?url=` +
                      encodeURIComponent(e)
                    }
                  />
                </video>
                <Link
                  href={`https://api-insta-zswvj.ondigitalocean.app/dl?url=${encodeURIComponent(
                    e
                  )}&type=${data.type}&title=${Math.floor(
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
                    <span className="text-sm mr-1">
                      Download {data.type == 'mp3' ? 'Audio' : 'Video'}
                    </span>
                  </button>
                </Link>
              </div>
            );
          })
        : ''}
      {data.data?.image?.length != 0
        ? data.data?.image?.map((e, index) => {
            return (
              <div className="flex justify-center m-5 flex-wrap" key={index}>
                <img src={e} className=" rounded-lg"></img>
                <Link
                  href={`https://api-insta-zswvj.ondigitalocean.app/dl?url=${encodeURIComponent(
                    e
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
            );
          })
        : ''}
    </div>
  );
};

export default DisplayPage;
