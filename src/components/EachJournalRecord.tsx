import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';
import styles from '../styles/journal.module.scss';
import BTC from 'cryptocurrency-icons/svg/icon/btc.svg';
import { DeleteIcon, PriceDownIcon, PriceUpIcon } from './SVGs/SVGicons';

interface EachJournalRecordProps {
    record: {
        assetName: string;
        buyPrice: string;
        date: string;
        entryTime: string;
        exitTime: string;
        lessonLearnt: string;
        mistake: string;
        quantity: string;
        sellPrice: string;
        stayTime: string;
        stopLoss: string;
        tradeResult: boolean;
    }
}

const EachJournalRecord: FunctionComponent<EachJournalRecordProps> = ({ record }): ReactElement => {
    return (
        <div className={styles.eachRecordBox}>
            <div className={styles.eachRecordBox__assetInfo}>
                <div className={styles.image}>
                    <Image src={BTC} alt="BTC" />
                </div>
                <div className={styles.info}>
                    <p>{record.assetName} <span className={styles.tag}>long</span></p>
                    <div className={styles.levels}>
                        <span>Entry: ${record.buyPrice}</span>
                        <span>Exit: ${record.sellPrice}</span>
                    </div>
                </div>
            </div>
            <div className={styles.eachRecordBox__indicator}>
                <span>{record.tradeResult ? <>Profit <PriceUpIcon/></> : <>Loss <PriceDownIcon /></>} </span>
            </div>
            <span className={styles.eachRecordBox__deleteIcon}><DeleteIcon /></span>
        </div>
    );
}

export default EachJournalRecord;