import Head from "next/head"
import ItemCard from "../../components/Card"
import {motion} from "framer-motion"
import Link from "next/link"

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
  const data = await fetcher('http://hackathon-backend.vercel.app/api/getEvents')
  console.log(data)
  return {
    props: {
      data
    }, // will be passed to the page component as props
    revalidate: 60, // In seconds
  }
}

export default function Items({data}){
  if(data){
    return(
        <div className="h-full">
            <Head>
                <title>Tickets Page</title>
            </Head>
            <div className="flex items-center justify-center gap-8">
            <div className="p-5 grid md:grid-cols-2 gap-[4.5rem]">
              {
              data.events.map((event)=>{
                return (<Link key={event.url} href={"/items/"+event.url}>
            
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
  return <div className="h-full"></div>
}
} 
