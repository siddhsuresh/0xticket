import Head from "next/head"
import Web3 from 'web3';
import {  marketplaceAbi } from "../../public/abi";
import { useState } from "react";
import * as NumericInput from "react-numeric-input";
import { motion } from "framer-motion";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { showNotification } from "@mantine/notifications";

const fetcher = (url) => fetch(url).then((res) => res.json());

function AnimatedButton(props) {
    async function ethEnabled(itemId, price, amount) {
        if (window.ethereum) {
            try {
                const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                console.log(address)
                const marketplaceContract = new web3.eth.Contract(marketplaceAbi, '0x8B28b55B178c323BAb0Bc6573687d007950A7526');
                const receipt = await marketplaceContract.methods.createMarketSale(itemId, amount).send({ from: address[0], value: price, })
                console.log("Receipt ", receipt)
                return receipt
            } catch (e) {
                showNotification({
                    title: "Error",
                    message: "Purchase Failed",
                    color: "red",
                    autoClose: 5000,
                });
                console.log(e)
                setIsAnimating(0)
            }
        }
        else {
            console.log("No Metamask")
            showNotification({
                title: "Error",
                message: "No Metamask detected",
                color: "red",
                autoClose: 5000,
            });
            setIsAnimating(0)
        }
    }
    const [isAnimating, setIsAnimating] = useState(0);
    return (
        <>
            <motion.button
                type="button"
                onClick={() => {
                    setIsAnimating(1)
                    ethEnabled(props.itemId, props.price, props.amount).then((data) => {
                        if (data != null) {
                            console.log(data)
                            showNotification({
                                title: "Success",
                                message: "Purchase Successful",
                                color: "green",
                                autoClose: 5000,
                            });
                            setIsAnimating(0)
                        }
                    })
                }}
                style={isAnimating === 0 ? { display: "flex" } : { display: "none" }}
                class="cursor-pointer flex gap-4 items-center justify-center py-2 px-4 hover:scale-105 scale-100 bg-[#7A0BC0] hover:bg-[#7A0BC0] focus:ring-[#7A0BC0] focus:ring-offset-[#7A0BC0] text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            >
                <AccountBalanceWalletIcon /> Purchase
            </motion.button>
            <motion.button
                style={isAnimating === 1 ? { display: "flex" } : { display: "none" }}
                type="button" class="py-2 px-4 flex justify-center items-center hover:scale-105 scale-100 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                    </path>
                </svg>
                Adding
            </motion.button>
        </>
    )
}

export async function getStaticPaths() {
    const data = await fetcher('http://hackathon-backend.vercel.app/api/getEvents')
    console.log(data)
    const paths = data.events.map((item) => ({
        params: {
            id: item.url,
        },
    }))
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
    const data = await fetcher(`http://hackathon-backend.vercel.app/api/getEvents?url=${context.params.id}`)
    return {
        props: {
            data,
        },
        revalidate: 60, // In seconds
    }
}

export default function Items({ data }) {
    const [value, setValue] = useState(1);
    if (data) {
        return (
            <>
                <Head>
                    <title>Home Page</title>
                </Head>
                <div class="flex flex-wrap md:h-screen p-10 h-full gap-10 justify-center items-center ">
                    <div
                        class="mb-4 px-4 md:w-1/2 w-full shadow-2xl h-[65vh] lg:h-full shadow-[#7A0BC0]/50 p-10"
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
                            <div className="text-[#FA58B6] text-2xl font-bold ">{data.title}</div>
                            <div className="text-white text-lg">{data.description}</div>
                            <div className="text-white text-lg">Available: {data.available}</div>
                            <div className="pt-3 pb-3 flex flex-wrap items-center justify-between gap-5">
                                <div className="text-white text-lg">Price: {Web3.utils.fromWei(data.price, 'ether')}</div>
                                <NumericInput min={1} max={data.available} value={value} onChange={setValue} />
                            </div>
                            <div className="pb-3 pt-3 text-white text-lg">Total Price to be paid is {value * Web3.utils.fromWei(data.price, 'ether')}</div>
                            {/* <Button
                                variant="contained"
                                color="primary"
                                className="rounded-lg pl-5 pr-5 pt-3 pb-3 gap-x-2 w-full"
                                onClick={() => { ethEnabled(data.item, value * data.price, value) }}
                            >
                                Purchase
                            </Button> */}
                            <AnimatedButton itemId={data.item} price={value * data.price} amount={value} />
                        </div>
                    </div>
                </div>

            </>
        );
    } else {
        return <div></div>
    }
}
