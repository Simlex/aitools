import { Dispatch, FunctionComponent, ReactElement, SetStateAction } from "react";
import styles from '../styles/disclaimer.module.scss';

interface DisclaimerProps {
    setVisibility: Dispatch<SetStateAction<boolean>>
    visibility: boolean
}

const Disclaimer: FunctionComponent<DisclaimerProps> = ({ visibility, setVisibility }): ReactElement => {

    return (
        <div className={visibility ? styles.modalParent : styles.modalParentInvisible}>
            <div className={styles.overlay} onClick={() => setVisibility(false)}></div>

            <div className={styles.modalContainer}>
                <p>The disclaimer document has been downloaded to your device.</p>
                <div className={styles.modalContainer__actions}>
                    <button onClick={() => setVisibility(false)}>Okay, Got it!</button>
                </div>
            </div>
        </div>
    );
}

export default Disclaimer;