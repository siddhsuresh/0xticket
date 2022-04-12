import Head from "next/head"
import ItemCard from "../../components/card"
import {motion} from "framer-motion"
import Link from "next/link"

import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Items(){

  const { data, error } = useSWR('http://localhost:6969/api/getEvents', fetcher);

  if(data){
    console.log(data)
  }

  if(data){
    return(
        <div className="h-full">
            <Head>
                <title>Items Page</title>
            </Head>
            <div className="flex items-center justify-center gap-8">
            <div className="p-5 grid grid-cols-2 gap-[3.5rem]">
              {
              data.events.map((event)=>{
                return (<Link href={"/items/"+event.url}>
            
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
                >
                <ItemCard {...event} />
                </motion.div>
                </Link>)
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