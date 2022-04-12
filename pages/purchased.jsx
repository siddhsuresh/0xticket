import Head from "next/head"
import ItemCard from "../components/Card"
import {motion} from "framer-motion"
import { Modal } from '@mantine/core';
import { useEffect, useState, useRef } from "react";
import dynamic from 'next/dynamic'
import useSWR from 'swr';
// import Link from "next/link"

const DynamicComponent = dynamic(
    () => import('../components/QRreader'),
    { ssr: false }
)
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Purchased(){
  const [opened, setOpened] = useState(false);
  const { data, error } = useSWR(process.env.API_URL+'/api/getEvents', fetcher);

  if(data){
    console.log(data)
  }

  if(data){
    return(
        <div className="h-full">
            <Head>
                <title>Purchased Tickets</title>
            </Head>
            <Modal
                size="lg"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Scan QR Code"
                styles={{
                    "overlay": {
                        backgroundColor: "#270082",
                    },
                    "modal" : {
                        backgroundColor: "#1A1A40",
                    },
                    "title" : {
                        color: "#FA58B6",
                        fontWeight: "bold",
                    },
                }}
            >
                <DynamicComponent />
            </Modal>

            <div className="flex items-center justify-center gap-8">
            <div className="p-5 grid md:grid-cols-2 gap-[3.5rem]">
              {
              data.events.map((event)=>{
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
                  onClick={() => setOpened(true)}
                  className="shadow-xl shadow-[#FA58B6]/20"
                >
                <ItemCard {...event} />
                </motion.div>
                )
              })
            }
            
            </div>
        </div>
        </div>
    )
} else {
  return <div></div>
}
} 