import Head from "next/head"
import PurchasedItemCard from "../components/purcCard"
import {motion} from "framer-motion"
import useSWR from 'swr';
// import Link from "next/link"
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Purchased(){
  const { data, error } = useSWR(process.env.API_URL+'/api/getNFTs?account=0x33c0a3A1548AdCcaB635BC4a7843e9557CF95287', fetcher);

  if(data){
    console.log(data)
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
                <PurchasedItemCard title={event.metadata.name} description={event.metadata.description} totalSupply={event.amount} avatarSrc={event.metadata.image} id={event.token_id}/>
                </motion.div>
                )
              })
            }
            
            </div>
        </div>
        </div>
    )
} else {
  return <div className="h-full"></div>
}
} 