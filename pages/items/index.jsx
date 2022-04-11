import Head from "next/head"
import ItemCard from "../../components/card"
import {motion} from "framer-motion"
import Link from "next/link"
export default function Items(){
    return(
        <div className="h-screen">
            <Head>
                <title>Items Page</title>
            </Head>
            <div className="p-5 flex flex-wrap items-center justify-center gap-8">
                <Link href="/items/1">
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
            <ItemCard/>
            </motion.div>
            </Link>
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
            <ItemCard />
            </motion.div>
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
            <ItemCard />
            </motion.div>
            </div>
        </div>
    )
}