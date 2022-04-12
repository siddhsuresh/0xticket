import "../styles/globals.css";
import Head from "next/head";
import HeaderResponsive from "../components/Navbar";
import { MantineProvider } from '@mantine/core';
export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="!bg-[#1A1A40] h-full">
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <div className="p-5">
      <HeaderResponsive/>
      </div>
        <Component {...pageProps} />
        </MantineProvider>
      </div>
    </>
  );
}

