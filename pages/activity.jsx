import Head from "next/head";
import useSWR from "swr";
import {useRouter} from "next/router";
import { Router } from "@mui/icons-material";
import React from 'react';
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Logs() {
  const router = useRouter();
  async function connectWallet(){
    if (window.ethereum) {
      try {
          const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
          return address
      } catch (e) {
          showNotification({
              title: "Error",
              color: "red",
              autoClose: 5000,
            });
          console.log(e)
          setIsAnimating(0)
      }
  }
  }



  const [connected, setConnected] = React.useState("");

  React.useEffect(()=>{
    connectWallet().then((address)=>{
      setConnected(address[0]);
    }).catch((e)=>{
      setConnected("");
    })
  }, [])
  
  console.log(connected)
  const { data, error } = useSWR(process.env.API_URL+'/api/getLogs?account='+connected.toLowerCase(), fetcher);

  if(data){
    console.log(data)
  }
  if(connected==""||connected==null){
    return(
      <>
      <div className="h-full w-full flex items-center justify-center text-white text-4xl"> Loading...</div>
      </>
    )
  }
  
  // const { data, error } = useSWR(
  //   process.env.API_URL +
  //     "/api/getLogs?account=0x33c0a3A1548AdCcaB635BC4a7843e9557CF95287",
  //   fetcher
  // );
  // if(error)
  // {
  //   console.log(error)
  //   return <div>Error</div>
  // }
  if (data) {
    console.log(data);
    return (
      <>
        <Head>
          <title>Activity</title>
        </Head>
        <div className="p-3 container mx-auto h-screen">
          <p class="mt-2 text-3xl font-bold sm:text-5xl text-center text-[#FA58B6] pb-4">
            Activity
          </p>
          <div className="p-16 grid md:grid-cols-3 gap-[4.5rem] ">
            {data.logs.map((log) => {
              console.log(log)
              const date = new Date(log.timestamp).toDateString();
              const time = new Date(log.timestamp).toLocaleTimeString();
              return(
              <div
                className="flex flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg shadow-[#7A0BC0]/40"
                style={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "20px",
                }}
              >
                <p className="text-lg pb-2 text-white font-bold">
                  Event Name: {log.event.title}
                </p>
                <div className="text-left cursor-pointer text-[#FA58B6]"
                onClick={()=>{router.push("/items/"+log.event.url)}}
                >
                  Check Item
                </div>
                <h5 className="text-lg text-[#FA58B6] font-semibold">
                  Check In Time: {date} {time}
                </h5>
              </div>
              )
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <div className="h-full">Loading..</div>;
  }
}
