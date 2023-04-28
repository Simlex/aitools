import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'
import { useState } from 'react';
import IMarketDataCredentials from '@/constants/IMarketDataCredentials';


export default function App({ Component, pageProps }: AppProps) {

  // MarketData state
  const [marketData, setMarketData] = useState<IMarketDataCredentials[]>();

  /**
   * Updates the MarketData state
   * @param updatedMarketData The updated MarketData
   */
  function updateMarketData(updatedMarketData: any) {
    setMarketData(updatedMarketData?.data);
  }

  // Set the page props 
  pageProps = {
    marketData: marketData,
  };

  return <Layout updateMarketData={updateMarketData}>
    <Component {...pageProps} />
  </Layout>
}
