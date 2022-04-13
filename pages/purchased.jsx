import Head from "next/head"
import PurchasedItemCard from "../components/purcCard"
import {motion} from "framer-motion"
import useSWR from 'swr';
import {useRouter} from 'next/router'
import React from 'react';
// import Link from "next/link"
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Purchased(){
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
  const { data, error } = useSWR(process.env.API_URL+'/api/getNFTs?account='+connected, fetcher);

  if(data){
    console.log(data)
  }
  if(connected==""||connected==null){
    return(
      <>
      <div className="h-full"> Loading...</div>
      </>
    )
  }
  if(data){
    return(
        <div className="h-full">
            <Head>
                <title>Purchased Tickets</title>
            </Head>
            <div className="flex items-center justify-center gap-8">
            <div className="p-5 grid md:grid-cols-2 gap-[4.5rem]">
              {
              data.map((event)=>{
                return (
            
                <motion.div
                  // className="drops_hover_cursor"
                  style = {{
                    cursor: "pointer",
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ease: "easeOut", delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                  className="shadow-xl shadow-[#FA58B6]/20 rounded-xl hover:shadow-white/40 hover:shadow-2xl"
                >
                <PurchasedItemCard title={event.metadata.name} description={event.metadata.description} totalSupply={event.amount} avatarSrc={event.metadata.image} id={event.token_id} contract={event.token_address}/>
                </motion.div>
                )
              })
            }
            
            </div>
        </div>
        </div>
    )
} else {
  return <div className="h-full">Loading...</div>
}
} 