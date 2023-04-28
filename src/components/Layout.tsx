import Head from "next/head";
import { FunctionComponent, ReactElement, useEffect } from "react";
import Navbar from "./Navbar";
import useSWR from 'swr';

interface LayoutProps {
    children?: React.ReactNode;
    updateMarketData: (marketData: any) => void;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, updateMarketData }): ReactElement => {

    const assetSymbols = "BTC,ETH,TRX,XRP,BNB";

    const handleFetchCoinPrices = async () => {
        let result = await fetch(
            `https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,tron,xrp,litecoin`,
            {
                method: "get",
                // credentials: "include",
            }
        );

        const data = await result.json();

        console.log("data fetched: ", data.data);
        return data;
    };

    // The result, loading state and / or error of the fetch result
    const { data: currentMarketPrice, error, isLoading } = useSWR('https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,tron,xrp,litecoin', handleFetchCoinPrices, { refreshInterval: 15000, refreshWhenHidden: false });

    useEffect(() => {
        updateMarketData(currentMarketPrice);
    }, [currentMarketPrice]);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                />
            </Head>
            {children}
            <Navbar />
        </>
    );
}

export default Layout;