import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/Navbar.module.scss';
import { CalculatorIcon, HomeIcon, JournalIcon, MarketIcon, PriceIcon } from "./SVGs/SVGicons";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    return (
        <div className={styles.navContainer}>
            <ul>
                <li className={styles.active}>
                    <HomeIcon inverted /> 
                    Home
                </li>
                <li>
                    <MarketIcon inverted />
                    Tracker
                </li>
                <li>
                    <PriceIcon inverted />
                    Price
                </li>
                <li>
                    <CalculatorIcon inverted />
                    Calculator
                </li>
                <li>
                    <JournalIcon inverted />
                    Journal
                </li>
            </ul>
        </div>
    );
}

export default Navbar;