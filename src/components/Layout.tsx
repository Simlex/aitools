import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                />
            </Head>
            {children}
            <Navbar />
        </>
    );
}

export default Layout;