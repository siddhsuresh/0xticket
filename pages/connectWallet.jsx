import { useRouter } from 'next/router'
export default function connectWallet()
{
    const router = useRouter()
    console.log("Connect to Wallet");
    router.push('/')
    return(
        <>
            Connecting...
        </>
    )
}