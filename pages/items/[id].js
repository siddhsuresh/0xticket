import { useRouter } from "next/router";
import Head from "next/head"
import Image from "next/image";
import { Button } from "@mui/material";
import Web3 from 'web3';
import { tokenAbi, marketplaceAbi } from "../../public/abi";
import {useState} from "react";
import * as NumericInput from "react-numeric-input";

import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

async function ethEnabled(itemId, price, amount) {
    if (window.ethereum) {
        const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);

        console.log(address)

        const marketplaceContract = new web3.eth.Contract(marketplaceAbi, '0x8B28b55B178c323BAb0Bc6573687d007950A7526');

        const receipt = await marketplaceContract.methods.createMarketSale(itemId, amount).send({ from: address[0], value: price, })
        console.log(receipt)
    }


}

export default function Items() {
    const router = useRouter();
    const { id } = router.query;
    const [value,setValue] = useState(1);
    const { data, error } = useSWR(process.env.API_URL+'/api/getEvents?url=' + id, fetcher);
    if (data) {
        console.log(data)
        console.log(data.available)
    }
    console.log("value",value)
    if (data) {
        return (
            <>
                <Head>
                    <title>Home Page</title>
                </Head>
                <div class="flex flex-wrap md:h-screen p-10 h-full gap-10 justify-center items-center ">
                    <div
                        class="mb-4 px-4 md:w-1/2 w-full shadow-2xl h-[65vh] lg:h-full shadow-[#FA58B6]/50 p-10"
                        style={{
                            backgroundColor: "rgba(0,0,0,0.05)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "20px",
                        }}
                    >
                        <img
                            class="object-cover w-full h-full rounded-2xl p-5"
                            // src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            src={data.coverSrc}
                            alt=""
                        />
                    </div>
                    <div

                        class="my-4 p-6 md:w-1/3 w-full shadow-2xl space-y-7 text-center md:text-justify "
                        style={{
                            backgroundColor: "rgba(0,0,0,0.05)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "20px",
                        }}
                    >
                        <div className="flex flex-col gap-y-6 ">
                            <div className="text-white text-2xl font-semibold ">{data.title}</div>
                            <div className="text-white text-lg">{data.description}</div>
                            <div className="text-white text-lg">Available: {data.available}</div>
                            <br />
                            <div className="flex flex-wrap items-center justify-between gap-5">
                                <div className="text-white text-lg">Price: {Web3.utils.fromWei(data.price, 'ether')}</div>
                                <NumericInput min={1} max={data.available} value={value} onChange={setValue}/>
                            </div>
                            <div className="text-white text-lg">Total Price to be paid is {value* Web3.utils.fromWei(data.price, 'ether')}</div>
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                className="tw-rounded-lg tw-pl-5 tw-pr-5 tw-pt-3 tw-pb-3 tw-gap-x-2 tw-w-full"
                                onClick={() => { ethEnabled(data.item, value*data.price, value) }}
                            >
                                Purchase
                            </Button>
                        </div>
                    </div>
                </div>

            </>
        );
    } else {
        return <div></div>
    }
}