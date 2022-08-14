import Head from "next/head"
import Typed from 'react-typed';
import { useEffect } from "react";
import Image from "next/image";
export default function Items() {
  useEffect(() => {
    localStorage.setItem('active', '/')
  }, [])
  return (
    <div className="h-full">
      <Head>
        <title>
          0xticket | hackNight Hackathon
        </title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="p-10 text-center text-4xl font-semibold text-white">
          {/* <Typed
            strings={["Welcome to 0xtickets", "Experience Tickets in a whole new way", "Get Your Tickets Now!!"]}
            typeSpeed={40}
            backSpeed={40}
            smartBackspace
            loop
          /> */}
          <div className="max-w-screen-xl px-4 py-4 mx-auto lg:items-center lg:flex">
            <div className="flex flex-col items-center justify-center max-w-xl mx-auto text-center gap-5">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Welcome to 0xticket
              </h1>
              <strong className="text-3xl sm:text-5xl font-extrabold text-[#FA58B6] sm:block">
                Experience Tickets in a whole new way
              </strong>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-5 gap-6">
          <h3 className="text-center text-3xl font-semibold text-white">Presented By</h3>
          <div className="flex flex-row gap-4 items-center justify-center">
            <h4 className="text-center text-xl font-semibold text-white">
              Shreyas Sai <a className="text-[#FA58B6]" href="https://github.com/shreyassai123">@shreyassai123</a>
            </h4>
            <h4 className="text-center text-xl font-semibold text-white">
              Siddharth Suresh <a className="text-[#FA58B6]" href="https://github.com/siddhsuresh">@siddhsuresh</a>
            </h4><h4 className="text-center text-xl font-semibold text-white">
              Shrinath NR <a className="text-[#FA58B6]" href="https://github.com/ShrinathNR">@ShrinathNR</a>
            </h4>
          </div>
          <h3 className="text-3xl font-bold text-white mt-10 mb-2">GitHub Respositories</h3>
          <div className="flex flex-wrap lg:flex-row items-center justify-center gap-5">
            <div className="border h-full rounded p-4 flex flex-col text-white">
              <div className="flex items-center">
                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current mr-2" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <a href="https://github.com/siddhsuresh/hackathon-frontend" target="_blank" className="font-medium text-purple-200">
                  hackathon-frontend
                </a>
              </div>
              <div className="text-sm mt-2">
                0xticket FrontEnd Respository
              </div>
              <div className="text-sm mb-4">
                Winners of 48 Hour offline Hackathon h.ackKnight sponsered by polygon and crust
              </div>
              <div className="mt-auto text-sm flex">
                <div className="flex items-center mr-4">
                  <span className="pl-2 text-[#f1e05a]">JavaScript</span>
                </div>
                <div className="flex items-center mr-4">
                  <svg className="w-4 h-4 fill-current mr-2" aria-label="stars" viewBox="0 0 16 16" role="img">
                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                  </svg>
                  <span>0</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 fill-current mr-2" aria-label="fork" viewBox="0 0 16 16" role="img">
                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                  </svg>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="border h-full rounded p-4 flex flex-col text-white">
              <div className="flex items-center">
                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current mr-2" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <a href="https://github.com/shreyassai123/Hackathon-Backend" target="_blank" className="font-medium text-purple-200">
                  Hackathon-Backend
                </a>
              </div>
              <div className="text-sm mt-2">
                0xticket Backend Respository
              </div>
              <div className="text-sm mb-4">
                Winners of 48 Hour offline Hackathon h.ackKnight sponsered by polygon and crust
              </div>
              <div className="mt-auto text-sm flex">
                <div className="flex items-center">
                  <span className="pl-2 text-[#f1e05a]">JavaScript</span>
                </div>
                <div className="flex items-center mr-4">
                  <span className="pl-2 text-amber-500">Solidity</span>
                </div>
                <div className="flex items-center mr-4">
                  <svg className="w-4 h-4 fill-current mr-2" aria-label="stars" viewBox="0 0 16 16" role="img">
                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                  </svg>
                  <span>0</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 fill-current mr-2" aria-label="fork" viewBox="0 0 16 16" role="img">
                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                  </svg>
                  <span>0</span>
                </div>
              </div >
            </div>
          </div>
          <div className="m-10 flex flex-col items-center justify-center gap-5">
            <h3 className="text-white font-bold text-3xl">Medium Article on the Hackathon by Crust</h3>
            <div className="w-full px-6 mx-auto space-y-10 max-w-6xl lg:block">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/crustnetwork/recap-of-1st-crust-network-hackathon-in-india-a0d84c78473b"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
                  <Image
                    src="/medium.png"
                    width={1900}
                    height={900}
                    quality={100}
                    className="object-cover"
                    alt="Codesandbox placeholder"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white lg:text-6xl font-bold">
                    Click to Open in New Tab
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}