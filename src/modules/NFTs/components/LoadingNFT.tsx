import React from "react";

type Props = {};

const LoadingNFT = (props: Props) => {
  return (
    <div
      role="status"
      className="bg-[#34344499] flex-grow lg:w-[calc(100%*(1/4)-10px-1px)] xl:w-[calc(100%*(1/5)-10px-1px)] h-fit p-4 text-white flex flex-col gap-4 rounded-xl"
    >
      <div className="bg-gray-300 w-full h-fit aspect-square flex items-center justify-center dark:bg-gray-700 rounded-lg">
        <svg
          className="w-10 h-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-4 bg-gray-300 rounded-md dark:bg-gray-700 max-w-[360px] "></div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex justify-start flex-row items-center gap-4 ">
          <div className="h-8 w-8 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
          <div className="flex flex-col items-start gap-2">
            <div className="h-3 w-20 bg-gray-300 rounded-md dark:bg-gray-700"></div>
            <div className="h-3 w-20 bg-gray-300 rounded-md dark:bg-gray-700"></div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="h-3 w-20 bg-gray-300 rounded-md dark:bg-gray-700"></div>
          <div className="h-3 w-20 bg-gray-300 rounded-md dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingNFT;
