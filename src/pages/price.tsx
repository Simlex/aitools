import { SearchIcon } from "@/components/SVGs/SVGicons";
import { coinInfo } from "@/components/Tracker/coinInfo";
import Image from "next/image";
import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/price.module.scss';
import IMarketDataCredentials from "@/constants/IMarketDataCredentials";


import BTC from "cryptocurrency-icons/svg/icon/btc.svg";
import ETH from "cryptocurrency-icons/svg/icon/eth.svg";
import LTC from "cryptocurrency-icons/svg/icon/ltc.svg";
import XRP from "cryptocurrency-icons/svg/icon/xrp.svg";
import TRX from "cryptocurrency-icons/svg/icon/trx.svg";

interface PriceProps {
    marketData: IMarketDataCredentials[] | undefined
}

const Price: FunctionComponent<PriceProps> = ({ marketData }): ReactElement => {

    const [searchKeyWord, setSearchKeyWord] = useState();

    const coinInfo = [
        {
            coinName: marketData && marketData[0]?.name,
            coinCode: "BTC/USDT",
            coinImage: BTC,
            coinPrice: marketData ? `$${Number(marketData[0]?.priceUsd).toFixed(2)}` : 'loading',
            coinRate: marketData && `${Number(marketData[0]?.changePercent24Hr).toFixed(2)}`,
        },
        {
            coinName: marketData && marketData[1]?.name,
            coinCode: "ETH/USDT",
            coinImage: ETH,
            coinPrice: marketData ? `$${Number(marketData[1]?.priceUsd).toFixed(2)}` : 'loading',
            coinRate: marketData && `${Number(marketData[1]?.changePercent24Hr).toFixed(2)}`,
        },
        {
            coinName: marketData && marketData[2]?.name,
            coinCode: "XRP/USDT",
            coinImage: XRP,
            coinPrice: marketData ? `$${Number(marketData[2]?.priceUsd).toFixed(2)}` : 'loading',
            coinRate: marketData && `${Number(marketData[2]?.changePercent24Hr).toFixed(2)}`,
        },
        {
            coinName: marketData && marketData[3]?.name,
            coinCode: "LTC/USDT",
            coinImage: LTC,
            coinPrice: marketData ? `$${Number(marketData[3]?.priceUsd).toFixed(2)}` : 'loading',
            coinRate: marketData && `${Number(marketData[3]?.changePercent24Hr).toFixed(2)}`,
        },
        {
            coinName: marketData && marketData[4]?.name,
            coinCode: "TRX/USDT",
            coinImage: TRX,
            coinPrice: marketData ? `$${Number(marketData[4]?.priceUsd).toFixed(2)}` : 'loading',
            coinRate: marketData && `${Number(marketData[4]?.changePercent24Hr).toFixed(2)}`,
        },
    ];

    return (
        <div className={styles.body}>
            <div className={styles.topSection}>
                <div className={styles.topArea}>
                    <h2>Market Prices</h2>
                    {/* <p>See all</p> */}
                </div>
                <div className={styles.searchArea}>
                    <SearchIcon inverted />
                    <input type='text' placeholder="Search crypto assets" value={searchKeyWord} />
                </div>
                <div className={styles.tabSection}>
                    <span className={styles.active}>All</span>
                    {/* {
                        ([...Array(20)]).map(() =>
                            <span>24h</span>
                        )
                    } */}
                    <span>24h</span>
                    <span>Stocks</span>
                    <span>Crypto</span>
                    <span>Market cap</span>
                </div>
            </div>
            <div className={styles.assetsContainer}>
                {
                    coinInfo.map((eachCoinInfo, index) => (
                        <div className={styles.eachAsset} key={index}>
                            <div className={styles.eachAsset__image}>
                                <Image src={eachCoinInfo.coinImage} alt={eachCoinInfo.coinName as string} />
                            </div>
                            {/* <div className={styles.eachAsset__info}> */}
                            <div className={styles.eachAsset__name}>
                                <h6>{eachCoinInfo.coinCode}</h6>
                                <p>{eachCoinInfo.coinName}</p>
                            </div>
                            <div className={styles.eachAsset__priceArea}>
                                <h6>{eachCoinInfo.coinPrice}</h6>
                                {/* <p className={eachCoinInfo.coinRate.startsWith('-') ? styles.negativeValue : styles.positiveValue}>{eachCoinInfo.coinRate}%</p> */}
                                <p className={styles.positiveValue}>{eachCoinInfo.coinRate}%</p>
                            </div>
                            {/* </div> */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Price;