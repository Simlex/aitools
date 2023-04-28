import { PriceDownIcon, PriceUpIcon } from "@/components/SVGs/SVGicons";
import { coinInfo } from "@/components/Tracker/coinInfo";
import Image from "next/image";
import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/tracker.module.scss';
import IMarketDataCredentials from "@/constants/IMarketDataCredentials";

import BTC from "cryptocurrency-icons/svg/icon/btc.svg";
import ETH from "cryptocurrency-icons/svg/icon/eth.svg";
import LTC from "cryptocurrency-icons/svg/icon/ltc.svg";
import XRP from "cryptocurrency-icons/svg/icon/xrp.svg";
import TRX from "cryptocurrency-icons/svg/icon/trx.svg";

interface TrackerProps {
    marketData: IMarketDataCredentials[] | undefined
}

const Tracker: FunctionComponent<TrackerProps> = ({ marketData }): ReactElement => {




    return (
        <div className={styles.body}>
            <div className={styles.topSection}>
                <div className={styles.topArea}>
                    <h2>Portfolio Tracker</h2>
                    {/* <p>See all</p> */}
                </div>
                <div className={styles.topGainers}>
                    <p className={styles.sectionIndicator}>Top gainers in last 24hrs</p>
                    <div className={styles.cardsCarousel}>
                        {
                            coinInfo.map((eachCoinInfo, index) => (
                                <div className={styles.eachCard} key={index}>
                                    <div className={styles.eachCard__coinNameSection}>
                                        <div className={styles.coinImage}>
                                            <Image src={eachCoinInfo.coinImage} alt={eachCoinInfo.coinName as string} />
                                        </div>
                                        <div className={styles.coinName}>
                                            <h6>{eachCoinInfo.coinCode}</h6>
                                            <p>{eachCoinInfo.coinName}</p>
                                        </div>
                                    </div>
                                    <span className={styles.eachCard__price}>{eachCoinInfo.coinPrice}</span>
                                    <div className={styles.eachCard__precentageRate}>
                                        <div className={styles.icon}>
                                            {/* {eachCoinInfo.coinRate.startsWith('-') ? <PriceDownIcon /> : <PriceUpIcon />} */}
                                            <PriceUpIcon />
                                        </div>
                                        {/* <p className={eachCoinInfo.coinRate.startsWith('-') ? styles.negativeValue : styles.positiveValue}>{eachCoinInfo.coinRate}%</p> */}
                                        <p className={styles.positiveValue}>{eachCoinInfo.coinRate}%</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.otherAssets}>
                <p className={styles.sectionIndicator}>Other Assets</p>
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
        </div>
    );
}

export default Tracker;