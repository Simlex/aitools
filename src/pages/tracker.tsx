import { PriceDownIcon, PriceUpIcon } from "@/components/SVGs/SVGicons";
import { coinInfo } from "@/components/Tracker/coinInfo";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/tracker.module.scss';

interface TrackerProps {

}

const Tracker: FunctionComponent<TrackerProps> = (): ReactElement => {
    return (
        <div className={styles.body}>
            <div className={styles.topSection}>
                <div className={styles.topArea}>
                    <h2>Portfolio Tracker</h2>
                    <p>See all</p>
                </div>
                <div className={styles.topGainers}>
                    <p className={styles.sectionIndicator}>Top gainers in last 24hrs</p>
                    <div className={styles.cardsCarousel}>
                        {
                            coinInfo.map((eachCoinInfo, index) => (
                                <div className={styles.eachCard} key={index}>
                                    <div className={styles.eachCard__coinNameSection}>
                                        <div className={styles.coinImage}>
                                            <Image src={eachCoinInfo.coinImage} alt={eachCoinInfo.coinName} />
                                        </div>
                                        <div className={styles.coinName}>
                                            <h6>{eachCoinInfo.coinCode}</h6>
                                            <p>{eachCoinInfo.coinName}</p>
                                        </div>
                                    </div>
                                    <span className={styles.eachCard__price}>{eachCoinInfo.coinPrice}</span>
                                    <div className={styles.eachCard__precentageRate}>
                                        <div className={styles.icon}>
                                            {eachCoinInfo.coinRate.startsWith('-') ? <PriceDownIcon /> : <PriceUpIcon />}
                                        </div>
                                        <p className={eachCoinInfo.coinRate.startsWith('-') ? styles.negativeValue : styles.positiveValue}>{eachCoinInfo.coinRate}%</p>
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
                        ([...Array(20)]).map((index) => (
                            <div key={index}>
                                {
                                    coinInfo.map((eachCoinInfo, index) => (
                                        <div className={styles.eachAsset} key={index}>
                                            <div className={styles.eachAsset__image}>
                                                <Image src={eachCoinInfo.coinImage} alt={eachCoinInfo.coinName} />
                                            </div>
                                            {/* <div className={styles.eachAsset__info}> */}
                                            <div className={styles.eachAsset__name}>
                                                <h6>{eachCoinInfo.coinCode}</h6>
                                                <p>{eachCoinInfo.coinName}</p>
                                            </div>
                                            <div className={styles.eachAsset__priceArea}>
                                                <h6>{eachCoinInfo.coinPrice}</h6>
                                                <p className={eachCoinInfo.coinRate.startsWith('-') ? styles.negativeValue : styles.positiveValue}>{eachCoinInfo.coinRate}%</p>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Tracker;