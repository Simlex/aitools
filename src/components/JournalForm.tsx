import { FunctionComponent, ReactElement, Dispatch, ChangeEvent, SetStateAction, useState, FormEvent } from "react";
import { CalculatorIcon, CalenderIcon, ClockIcon, CloseMenuIcon } from "./SVGs/SVGicons";
import styles from '../styles/journal.module.scss';
import { EachJournalRecord, JournalRecord } from "./JournalRecord";

interface JournalFormProps {
    setJournalFormVisibility: Dispatch<SetStateAction<boolean>>
    setRecordList: Dispatch<SetStateAction<{
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
    }[]>>
    recordList: {
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
    }[]
}

const JournalForm: FunctionComponent<JournalFormProps> = ({ recordList, setJournalFormVisibility, setRecordList }): ReactElement => {
    const [tradeResult, setTradeResult] = useState(false);


    /**
     * Set form input fields value on change
     * @param e is the sender of the event
     */
    function onFormValueChanged(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        // Set the form name and value by destructuring
        const { name, value } = e.target;

        // Update the form value
        setInputs({ ...inputs, [name]: value });

        console.log('inputs: ', { ...inputs });
    }

    const [inputs, setInputs] = useState<EachJournalRecord>({
        tradeResult: tradeResult
    });

    function saveTradeRecord(e: FormEvent) {
        e.preventDefault();

        // recordList.push(inputs as JournalRecord);

        // setRecordList({ ...recordList, ...inputs });
    }

    return (
        <form className={styles.journalForm}>
            <div className={styles.topArea}>
                <h4>Add Record</h4>
                <button onClick={() => setJournalFormVisibility(false)}>
                    <CloseMenuIcon /> Close
                </button>
            </div>
            <div className={styles.inputField}>
                <p>Select Date</p>
                <div className={styles.input}>
                    <input type='text' placeholder="18/10/2022" name="date" onChange={onFormValueChanged} />
                    <CalenderIcon />
                </div>
            </div>
            <div className={styles.inputFieldTriple}>
                <div className={styles.inputField}>
                    <p>Entry Time</p>
                    <div className={styles.input}>
                        <input type='text' placeholder="10:25 AM" name="entryTime" onChange={onFormValueChanged} />
                        <ClockIcon />
                    </div>
                </div>
                <div className={styles.inputField}>
                    <p>Exit Time</p>
                    <div className={styles.input}>
                        <input type='text' placeholder="10:25 AM" name="exitTime" onChange={onFormValueChanged} />
                        <ClockIcon />
                    </div>
                </div>
                <div className={styles.inputField}>
                    <p>Stay Time</p>
                    <div className={styles.input}>
                        <input type='text' placeholder="10:25 AM" name="stayTime" onChange={onFormValueChanged} />
                        <ClockIcon />
                    </div>
                </div>
            </div>
            <div className={styles.inputField}>
                <p>Asset Name</p>
                <div className={styles.input}>
                    <input type='text' placeholder="Cryptocurrency name" name="assetName" onChange={onFormValueChanged} />
                </div>
            </div>
            <div className={styles.inputFieldTriple}>
                <div className={styles.inputField}>
                    <p>Buy Price</p>
                    <div className={styles.input}>
                        <input type='text' placeholder="25,354.64" name="buyPrice" onChange={onFormValueChanged} />
                    </div>
                </div>
                <div className={styles.inputField}>
                    <p>Sell Price</p>
                    <div className={styles.input}>
                        <input type='text' placeholder="25,354.64" name="sellPrice" onChange={onFormValueChanged} />
                    </div>
                </div>
                <div className={styles.inputField}>
                    <p>Stop Loss</p>
                    <div className={styles.input}>
                        <input type='text' placeholder="25,354.64" name="stopLoss" onChange={onFormValueChanged} />
                    </div>
                </div>
            </div>
            <div className={styles.inputField}>
                <p>Quantity</p>
                <div className={styles.input}>
                    <input type='text' placeholder="0.0001" name="quantity" onChange={onFormValueChanged} />
                </div>
            </div>
            <div className={styles.inputField}>
                <p>Profit/Loss</p>
                <div className={styles.selectionTabInput}>
                    <span onClick={() => setTradeResult(true)}>Profit</span>
                    <span onClick={() => setTradeResult(false)}>Loss</span>
                    <span
                        className={styles.selectionTabInput__indicator}
                        style={tradeResult ?
                            { backgroundColor: '#2EBD85', left: 0 } :
                            { backgroundColor: '#DC143C', left: '50%' }}>
                    </span>
                </div>
            </div>
            <div className={styles.inputField}>
                <p>Mistake</p>
                <div className={styles.input}>
                    <input type='text' placeholder="Early Exit" name="mistake" onChange={onFormValueChanged} />
                </div>
            </div>
            <div className={styles.inputField}>
                <p>Lesson Learnt</p>
                <div className={styles.input}>
                    <input type='text' name="lessonLearnt" placeholder="Should wait and trust analysis" onChange={onFormValueChanged} />
                </div>
            </div>
            <div className={styles.inputField}>
                <p>Reason to Take Trade</p>
                <div className={styles.input}>
                    <input type='text' name="tradeReason" placeholder="Possibility of rate increase" onChange={onFormValueChanged} />
                </div>
            </div>
            <button className={styles.save}
                onClick={(e) => saveTradeRecord(e)}>Save Trade Record</button>
        </form>
    );
}

export default JournalForm;