import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage | AI Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homepage}>
        <div className={styles.appName}>
          <div>
            AITools
            <span>incoming...</span>
          </div>
        </div>
      </div>
    </>
  )
}
