import EachJournalRecord from "@/components/EachJournalRecord";
import JournalForm from "@/components/JournalForm";
import { JournalRecord } from "@/components/JournalRecord";
import { CalculatorIcon, ClockIcon, PlusIcon } from "@/components/SVGs/SVGicons";
import { FunctionComponent, ReactElement, useState } from "react";
import styles from '../styles/journal.module.scss';

interface JournalProps {

}

const Journal: FunctionComponent<JournalProps> = (): ReactElement => {

    const [journalFormVisibility, setJournalFormVisibility] = useState(false);
    // const [recordList, setRecordList] = useState<Array<JournalRecord>>([
    const [recordList, setRecordList] = useState([
        {
            assetName : "BTC/USDT",
            buyPrice : "25,000",
            date : "23/05/2023",
            entryTime : "10:25",
            exitTime : "09:15",
            lessonLearnt : "Trust analysis",
            mistake : "Closed position early",
            quantity : "0.00134",
            sellPrice : "32,854",
            stayTime : "08:00",
            stopLoss : "9,853",
            tradeResult : true
        },
        {
            assetName : "BTC/USDT",
            buyPrice : "25,000",
            date : "23/05/2023",
            entryTime : "10:25",
            exitTime : "09:15",
            lessonLearnt : "Trust analysis",
            mistake : "Closed position early",
            quantity : "0.00134",
            sellPrice : "12,854",
            stayTime : "08:00",
            stopLoss : "9,853",
            tradeResult : false
        },
    ]);

    console.log('recordList', recordList);

    return (
        <div className={styles.body}>
            <div className={styles.topArea}>
                <h2>Journal</h2>
            </div>

            {
                journalFormVisibility ? <></> : recordList.length < 1 ?
                    <>
                        <div className={styles.availableJournal}>
                            <p>You have not added any item yet</p>
                        </div>
                        <div className={styles.addToList} onClick={() => setJournalFormVisibility(true)}>
                            <div className={styles.addToList__icon}>
                                <PlusIcon inverted />
                            </div>
                            Add record
                        </div>
                    </>
                    :
                    <div className={styles.recordList}>
                        {recordList.map((eachRecord, index) => (
                            <EachJournalRecord record={eachRecord} />
                        ))}
                        <button onClick={() => setJournalFormVisibility(true)}>Add New</button>
                    </div>
            }
            {journalFormVisibility &&
                <JournalForm
                    recordList={recordList}
                    setJournalFormVisibility={setJournalFormVisibility}
                    setRecordList={setRecordList} />}
        </div>
    );
}

export default Journal;