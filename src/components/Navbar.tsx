import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, ReactElement } from "react";
import styles from '../styles/Navbar.module.scss';
import { CalculatorIcon, HomeIcon, JournalIcon, MarketIcon, PriceIcon } from "./SVGs/SVGicons";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

    const router = useRouter();
    console.log('router: ', router.pathname);

    return (
        <div className={styles.navContainer}>
            <ul>
                <Link href='/'>
                    <li className={router.pathname == '/' ? styles.active : ''}>
                        <HomeIcon inverted />
                        Home
                    </li>
                </Link>
                <Link href='/tracker'>
                    <li className={router.pathname == '/tracker' ? styles.active : ''}>
                        <MarketIcon inverted />
                        Tracker
                    </li>
                </Link>
                <Link href='/price'>
                    <li className={router.pathname == '/price' ? styles.active : ''}>
                        <PriceIcon inverted />
                        Price
                    </li>
                </Link>
                <Link href='/calculator'>
                    <li className={router.pathname == '/calculator' ? styles.active : ''}>
                        <CalculatorIcon inverted />
                        Calculator
                    </li>
                </Link>
                <Link href='/journal'>
                    <li className={router.pathname == '/journal' ? styles.active : ''}>
                        <JournalIcon inverted />
                        Journal
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;