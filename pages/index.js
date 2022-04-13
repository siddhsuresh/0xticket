import Head from "next/head"
import Typed from 'react-typed';
import { useEffect } from "react";
export default function Items() {
  useEffect(() => {
    localStorage.setItem('active', '/')
  }, [])
  return (
    <div className="h-screen">
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="p-10 text-center text-4xl font-semibold text-[#FA58B6] ">
          <Typed
            strings={["Welcome to 0xtickets", "Experience Tickets in a whole new way", "Get Your Tickets Now!!"]}
            typeSpeed={40}
            backSpeed={40}
            smartBackspace
            loop
          />
        </div>
        <div className="flex flex-col items-center justify-center p-5 gap-6">
          <h3 className="text-center text-3xl font-semibold text-white">Presented By</h3>
          <div className="flex flex-row gap-4 items-center justify-center">
            <h3 className="text-center text-xl font-semibold text-white">Shreyas Sai</h3>
            <h3 className="text-center text-xl font-semibold text-white">Siddharth Suresh</h3>
            <h3 className="text-center text-xl font-semibold text-white">Shrinath NR</h3>
          </div>
          <br />
          <h3 className="text-center text-3xl font-semibold text-[#FA58B6]">GitHub Respositores</h3>
          <div className="flex flex-row gap-4 items-center justify-center">
            <div className="flex flex-row gap-4 items-center justify-center" onClick={()=>{window.open('https://github.com/siddhsuresh/hackathon-frontend')}} style={{cursor:"pointer"}}>
              <h3 className="text-center text-xl font-semibold text-white"><svg style={{display:"inline"}} height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg> FrontEnd</h3>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center" onClick={()=>{window.open('https://github.com/shreyassai123/Hackathon-Backend')}} style={{cursor:"pointer"}}>
              <h3 className="text-center text-xl font-semibold text-white"><svg style={{display:"inline"}} height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg> BackEnd</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}