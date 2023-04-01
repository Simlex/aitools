import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/calculator.module.scss';

interface CalculatorProps {
    
}
 
const Calculator: FunctionComponent<CalculatorProps> = ():ReactElement => {
    return ( 
        <div className={styles.body}>
            Calculator
        </div>
     );
}
 
export default Calculator;