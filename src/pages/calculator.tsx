import { ArrowDownIcon, InfoIcon, MinusIcon, PlusIcon, SelectionIcon } from "@/components/SVGs/SVGicons";
import { coinInfo } from "@/components/Tracker/coinInfo";
import Image from "next/image";
import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/calculator.module.scss';
import IMarketDataCredentials from "@/constants/IMarketDataCredentials";

import BTC from "cryptocurrency-icons/svg/icon/btc.svg";
import ETH from "cryptocurrency-icons/svg/icon/eth.svg";
import LTC from "cryptocurrency-icons/svg/icon/ltc.svg";
import XRP from "cryptocurrency-icons/svg/icon/xrp.svg";
import TRX from "cryptocurrency-icons/svg/icon/trx.svg"; 

interface CalculatorProps {
    marketData: IMarketDataCredentials[] | undefined
}

const Calculator: FunctionComponent<CalculatorProps> = ({ marketData }): ReactElement => {

    const [selectedCoin, setSelectedCoin] = useState<string>();
    const [isFuturesCalculatorVisible, setIsFuturesCalculatorVisible] = useState(true);

    const [futuresCoinTabVisibility, setFuturesCoinTabVisibility] = useState(false);
    const [buyTabVisibility, setBuyTabVisibility] = useState(true);

    const [tpselected, setTpselected] = useState(false);
    const [isReducedOnlySelected, setIsReducedOnlySelected] = useState(false);

    const [percentageValue, setPercentageValue] = useState(0);


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
            <div className={styles.topArea}>
                <h2>Calculator</h2>
            </div>
            {
                !selectedCoin
                    ?
                    <div className={styles.coinSelectionContainer}>
                        <p className={styles.sectionIndicator}>Select asset</p>
                        <div className={styles.assetsContainer}>
                            {
                                coinInfo.map((eachCoinInfo, index) => (
                                    <div className={styles.eachAsset} key={index} onClick={() => setSelectedCoin(eachCoinInfo.coinCode)}>
                                        <div className={styles.eachAsset__image}>
                                            <Image src={eachCoinInfo.coinImage} alt={eachCoinInfo.coinName as string} />
                                        </div>
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
                    :
                    <>
                        <div className={styles.tabSection}>
                            <span className={isFuturesCalculatorVisible ? styles.active : ''} onClick={() => setIsFuturesCalculatorVisible(true)}>Futures</span>
                            <span className={isFuturesCalculatorVisible ? '' : styles.active} onClick={() => setIsFuturesCalculatorVisible(false)}>DCA</span>
                            <span className={styles.indicator} style={{ left: `${isFuturesCalculatorVisible ? '0' : '50%'}` }}></span>
                        </div>
                        <div className={styles.calculatorSection}>
                            <div className={styles.calculatorSection__tradeOptions}>
                                <span className={styles.indicator} style={buyTabVisibility ? { left: 0, backgroundColor: '#2EBD85' } : { left: '50%', backgroundColor: '#DC143C' }}></span>
                                <span onClick={() => setBuyTabVisibility(true)}><p>Buy</p></span>
                                <span onClick={() => setBuyTabVisibility(false)}><p>Sell</p></span>
                            </div>
                            {isFuturesCalculatorVisible &&
                                <div className={styles.calculatorSection__availableBalance}>
                                    <p className={styles.sectionIndicator}>Avbl</p>
                                    <p className={styles.avblPrice}>20,203 USDT</p>
                                </div>}
                            <div className={styles.tradeCalculator}>
                                <div className={styles.tradeCalculator__tradeType}>
                                    <span>
                                        <InfoIcon inverted />
                                    </span>
                                    <select>
                                        <option value='limit'>Limit</option>
                                        <option value='cross'>Cross</option>
                                    </select>
                                    <span>
                                        <ArrowDownIcon inverted />
                                    </span>
                                </div>
                                <div className={styles.tradeCalculator__tradePrice}>
                                    <span className={styles.action}>
                                        <MinusIcon inverted />
                                    </span>
                                    <input type='text' placeholder="1.632" />
                                    <span className={styles.action}>
                                        <PlusIcon inverted />
                                    </span>
                                </div>
                                <div className={styles.tradeCalculator__tradeAmount}>
                                    {isFuturesCalculatorVisible &&
                                        <div className={styles.tab}>
                                            <span>BTC</span>
                                            <span>USDT</span>
                                        </div>}
                                    <div className={styles.amount}>
                                        <span>
                                            <MinusIcon inverted />
                                        </span>
                                        <input type='text' placeholder="Amount (BTC)" />
                                        <span>
                                            <PlusIcon inverted />
                                        </span>
                                    </div>
                                </div>
                                {!isFuturesCalculatorVisible &&
                                    <div className={styles.tradeCalculator__totalAmount}>
                                        <div className={styles.percentageTab}>
                                            <div className={styles.indicatorBar} onClick={() => setPercentageValue(0)}>
                                                <span style={{ width: `${percentageValue}%`, backgroundColor: `${buyTabVisibility ? '#2EBD85' : '#DC143C'}` }}></span>
                                            </div>
                                            <div className={styles.values}>
                                                <span onClick={() => setPercentageValue(25)}>25%</span>
                                                <span onClick={() => setPercentageValue(50)}>50%</span>
                                                <span onClick={() => setPercentageValue(75)}>75%</span>
                                                <span onClick={() => setPercentageValue(100)}>100%</span>
                                            </div>
                                        </div>
                                        <div className={styles.amount}>
                                            <input type='text' placeholder="Total (USDT)" />
                                        </div>
                                    </div>}
                                {isFuturesCalculatorVisible &&
                                    <div className={styles.tradeCalculator__sliderArea}>
                                        <input type="range" className={styles.rangeSlider} min="0" max="20" value="10" step="2" />
                                    </div>}
                                <div className={styles.tradeCalculator__tpArea}>
                                    <div className={styles.options}>
                                        <div className={styles.tpAreaOption}>
                                            <div className={styles.tpAreaOption__left} onClick={() => setTpselected(!tpselected)}>
                                                {tpselected ? <SelectionIcon inverted checked /> : <SelectionIcon inverted />}
                                                <p>TP/SL</p>
                                            </div>
                                            {tpselected && <input className={styles.tpAreaOption__price} type="text" placeholder="0.453" />}
                                        </div>
                                        <div className={styles.tpAreaOption} onClick={() => setIsReducedOnlySelected(!isReducedOnlySelected)}>
                                            <div className={styles.tpAreaOption__left}>
                                                {isReducedOnlySelected ? <SelectionIcon inverted checked /> : <SelectionIcon inverted />}
                                                <p>Reduce Only</p>
                                            </div>
                                            {/* <p className={styles.tpAreaOption__price}>0.453</p> */}
                                        </div>
                                    </div>
                                </div>
                                {!isFuturesCalculatorVisible &&
                                    <div className={styles.calculatorSection__availableBalance} style={{ marginBottom: '4px' }}>
                                        <p className={styles.sectionIndicator}>Avbl</p>
                                        <p className={styles.avblPrice}>20,203 USDT</p>
                                    </div>}
                                <div className={styles.summaryCheckout}>
                                    {isFuturesCalculatorVisible &&
                                        <>
                                            <div className={styles.summaryCheckout__maxValue}>
                                                <p className={styles.sectionIndicator}>Max</p>
                                                <p className={styles.price}>129.8 BTC</p>
                                            </div>
                                            <div className={styles.summaryCheckout__costValue}>
                                                <p className={styles.sectionIndicator}>Cost</p>
                                                <p className={styles.price}>0.00 BTC</p>
                                            </div>
                                        </>}
                                    {buyTabVisibility ? <button>Buy/Long</button> : <button style={{ backgroundColor: '#DC143C' }}>Sell/Short</button>}
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
}

export default Calculator;
