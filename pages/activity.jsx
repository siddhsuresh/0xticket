import Head from "next/head";
import useSWR from "swr";
import {useRouter} from "next/router";
import { Router } from "@mui/icons-material";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Logs() {
  const router = useRouter();
  const { data, error } = useSWR(
    process.env.API_URL +
      "/api/getLogs?account=0x33c0a3A1548AdCcaB635BC4a7843e9557CF95287",
    fetcher
  );
  if(error)
  {
    console.log(error)
    return <div>Error</div>
  }
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
                <p className="text-md text-white">
                  Event Address: {log.account}
                </p>
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
