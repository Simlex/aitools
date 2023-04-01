import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/journal.module.scss';

interface JournalProps {

}

const Journal: FunctionComponent<JournalProps> = (): ReactElement => {
    return (
        <div className={styles.body}>
            Journal
        </div>
    );
}

export default Journal;