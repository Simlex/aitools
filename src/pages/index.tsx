import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { TradeSaveTimeIcon, UpdateNotificationIcon } from '@/components/SVGs/SVGicons';
import { useEffect } from 'react';
import AOS from 'aos';
import useResponsive from '@/hooks/useResponsiveness';

export default function Home() {

  useEffect(() => {
      AOS.init();
  }, []);

  const onMobile = useResponsive();

  const activities = [
    {
      title: 'Track',
      text: ['Check current asset prices and track your Crypto portfolio in real time.'],
    },
    {
      title: 'Price',
      text: ['Create price alerts (entry and exit alerts) for any tradable asset.'],
    },
    {
      title: 'Calculator',
      text: ['Futures calculator: Calculate Quantity, Stop Loss (SL) and Take Profit (TP) prices',
        'DCA calculator – Calculate strategic entry prices for assets being bought by DCA'],
    },
    {
      title: 'Journal',
      text: ['Keep tabs of your trading journey and individual trades.'],
    }
  ]

  return (
    <>
      <Head>
        <title>Homepage | AI Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        {/* <div className={styles.appLoader}>
          <div>
            AITools
            <span>incoming...</span>
          </div>
        </div> */}
        <div className={styles.topBar}>
          <div className={styles.topBar__logo} data-aos="fade-down">
            <Image src='/logo_white.png' alt="App logo" fill />
          </div>
          <button>Stay Updated</button>
        </div>

        <div className={styles.heroSection}>
          <div className={styles.lhs} data-aos="zoom-out-right">
            <div className={styles.lhs__text}>
              <h2>The important Crypto trading tools, <span>All in one platform.</span></h2>
              <p>Trade seamlessly and efficiently. The integration of different efficient crypto trading tools <span>powered by AI.</span></p>
            </div>
            <div className={styles.lhs__actionButtons}>
              <button>Stay Updated</button>
              <button className={styles.textBtn}>Read whitepaper</button>
            </div>
          </div>
          <div className={styles.rhs} data-aos={onMobile ? '' : "fade-left"}>
            <div className={styles.rhs__bgImage}>
              <Image src='/heroSectionBgImg.png' alt="Webpage image" fill />
            </div>
          </div>
          {/* <div className={styles.rhs}>
            <div className={styles.rhs__image}>
              <Image src='/logo_white.png' alt="App logo" fill />
            </div>
          </div> */}
        </div>

        <div className={styles.aboutSection} data-aos="zoom-out">
          <h2>About AiTools</h2>
          <p>Imagine being able to access all necessary tools needed to trade Crypto and save time, minimizes stress, maximize profits and also allows you to trade to your fullest potential. AITools gives you the power to do that one just one platform.</p>
          <div className={styles.aboutSection__icon}>
            <TradeSaveTimeIcon />
          </div>
        </div>

        <div className={styles.createSection}>
          <div className={styles.lhs}>
            <h4>Create your own trading terms</h4>
            <p>In only a few clicks, use the native web app to access any tool you want.</p>
            <div className={styles.lhs__activities}>
              {activities.map((eachActivity, index) => (
                <div className={styles.activity}>
                  <h4>{eachActivity.title}</h4>
                  {eachActivity.text.length < 2 ? 
                  <span  data-aos="zoom-out-up">{eachActivity.text[0]}</span> :
                    <div className={styles.activityGrp}>
                      {eachActivity.text.map((activityText, index) => (
                        <span  data-aos="zoom-out-up" key={index}>{activityText}</span>
                      ))}
                    </div>}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rhs} data-aos="fade-in">
            <div className={styles.rhs__image}>
              {/* <Image src='/heroSectionBgImg.png' alt="Webpage image" fill /> */}
              <span><Image src='/first.png' alt="Webpage image" fill /></span>
              <span><Image src='/second.png' alt="Webpage image" fill /></span>
              <span><Image src='/third.png' alt="Webpage image" fill /></span>
              <span><Image src='/fourth.png' alt="Webpage image" fill /></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.saveTimeSection} data-aos="flip-up" data-aos-delay="500">
        <h2>SAVE TIME, EARN MORE</h2>
        <TradeSaveTimeIcon />
      </div>

      <div className={styles.body}>
        <div className={styles.platformSection}>
          <div className={styles.lhs} data-aos="fade-right">
            <h2>Cross-Platform</h2>
            <p>Enjoy the benefits of AITools on any device at any time with our streamlined web app.</p>
            <p>Whether you are on your phone on a beach, or on your laptop at home, AITools has got you covered.</p>
          </div>
          <div className={styles.rhs} data-aos="fade-left">
            <div className={styles.rhs__image}>
              <Image src='/platform.png' alt='Platform image' fill />
            </div>
          </div>
          <span className='line'></span>
        </div>

        <div className={styles.updateSection}  data-aos="fade-up">
          <div className={styles.updateSection__topIcon}>
            <UpdateNotificationIcon />
          </div>
          <div className={styles.updateSection__content}>
            <h4>Stay Updated</h4>
            <p>To stay informed about product development and launch details, you can click the 'Stay Updated' button below.</p>
            <div className={styles.actionButtons}>
              <button>Stay Updated</button>
              <button className={styles.textBtn}>Read whitepaper</button>
            </div>
          </div>
        </div>

        <div className={styles.roadmapSection}>
          <h2>Roadmap</h2>
        </div>

        <div className={styles.getNotifiedSection}>
          <h2>Get Notified</h2>
          <div className={styles.getNotifiedSection__input}>
            <input type='text' placeholder='Your email' />
            <button>Go</button>
          </div>
        </div>

        <div className={styles.footerArea}>
          <div className={styles.footerArea__logo}>
            <Image src='/logo_white.png' alt='Logo' fill />
          </div>
          <p>Copyright &copy; 2023</p>
        </div>
      </div>
    </>
  )
}
