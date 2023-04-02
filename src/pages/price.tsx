import { SearchIcon } from "@/components/SVGs/SVGicons";
import { coinInfo } from "@/components/Tracker/coinInfo";
import Image from "next/image";
import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/price.module.scss';

interface PriceProps {

}

const Price: FunctionComponent<PriceProps> = (): ReactElement => {

    const [searchKeyWord, setSearchKeyWord] = useState();

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
        </div>
    );
}

export default Price;