import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { ArrowDownIcon, ArrowUpIcon, CloseMenuIcon, HamburgerMenuIcon, TradeSaveTimeIcon, UpdateNotificationIcon } from '@/components/SVGs/SVGicons';
import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import useResponsive from '@/hooks/useResponsiveness';
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link';
import images from '../../public/images';
import Disclaimer from '@/components/Disclaimer';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  const onMobile = useResponsive();

  const inputRef = useRef<HTMLInputElement>(null);

  const [getNotifiedIsActive, setGetNotifiedIsActive] = useState(false)

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false);

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

  const roadmapData = [
    {
      segment: 'Q2 2023',
      activities: ['Concept development', 'Build user interface and UI live', 'AITools web app', 'Extensive marketing campaigns', 'DEX listings']
    },
    {
      segment: 'Q3 2023',
      activities: ['AITools app rollout (iOS and Android)', 'AITools trading community kick-off', 'Pancakeswap Perpetual (futures) integration', 'Swap compatibility live on app', 'Top-tier CEX listings']
    },
    {
      segment: 'Q4 2023',
      activities: ['PC app rollout (Mac, Windows)', 'Mobile App UI/UX revamp', 'Additional product and tools', 'Browser (Chrome) extension']
    },
    {
      segment: 'Q1 2024',
      activities: ['Tradingview integration', 'Cross-chain integration to AITools platform']
    },
  ]

  const teamData = [
    {
      name: 'Micheal Keith',
      role: 'Founder/CEO',
      twitterLink: 'https://twitter.com/keith_micheal_?s=11',
      image: images.micheal
    },
    {
      name: 'Frederick Jawarnacia',
      role: 'CFO',
      twitterLink: 'https://twitter.com/Fred_AITools?t=pIYgHlteKiXYRtxoYlT8eA&s=09',
      image: images.frederick
    },
    {
      name: 'Austin Cole',
      role: 'AI Dev',
      twitterLink: 'http://twitter.com/wayne_AITools',
      image: images.austin
    },
    {
      name: 'Reyna Allisa',
      role: 'CMO',
      twitterLink: 'https://twitter.com/reynaallisa?s=11',
      image: images.reyna
    },
  ]

  const partnersData = [
    {
      image: images.bnb,
    },
    {
      image: images.poo,
    },
    {
      image: images.pancake,
    },
    {
      image: images.dexTools,
    },
    {
      image: images.tradingView,
    },
  ]

  return (
    <>
      <Head>
        <title>Homepage | AI Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollLink to='top' smooth={true} duration={500} offset={0}>
        <div className={styles.scrollToTopIcon}>
          <ArrowUpIcon />
        </div>
      </ScrollLink>

      {isDisclaimerVisible && <Disclaimer visibility={isDisclaimerVisible} setVisibility={setIsDisclaimerVisible} />}
      <div className={styles.body} id="top">
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
          {!onMobile && <ul className={styles.topBar__listItems}>
            <ScrollLink to="aboutSection" smooth={true} duration={500} offset={0}>
              <li>About us</li>
            </ScrollLink>
            <ScrollLink to="teamsSection" smooth={true} duration={500} offset={0}>
              <li>Team</li>
            </ScrollLink>
            <ScrollLink to="tokenSection" smooth={true} duration={500} offset={0}>
              <li>Token</li>
            </ScrollLink>
            <ScrollLink to="howToBuySection" smooth={true} duration={500} offset={0}>
              <li>How to buy/Join IDO</li>
            </ScrollLink>
            <ScrollLink to="partnersSection" smooth={true} duration={500} offset={0}>
              <li>Partners</li>
            </ScrollLink>
            <a href='/disclaimer.docx' download onClick={() => setIsDisclaimerVisible(!isDisclaimerVisible)}>
              <li>Disclaimer</li>
            </a>
          </ul>}
          <div className={styles.topBar__rhs}>
            <ScrollLink to="stayUpdated"
              onClick={() => {
                setGetNotifiedIsActive(true)
                inputRef.current && inputRef.current.focus()
              }} smooth={true} duration={500} offset={0}>
              <button>Stay Updated</button>
            </ScrollLink>
            {onMobile && <div className={styles.navIcon} onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? <CloseMenuIcon /> : <HamburgerMenuIcon />}
            </div>}

            {isNavOpen && onMobile &&
              <div className={styles.mobileNavContainer}>
                <div className={styles.mobileNavContainer__topArea}>
                  <div className={styles.logo}>
                    <></>
                  </div>
                  <div className={styles.closeIcon} onClick={() => setIsNavOpen(false)}>
                    <CloseMenuIcon />
                  </div>
                </div>
                <div className={styles.mobileNavContainer__navigationLinks}>
                  <div className={styles.navLinks}>
                    <ScrollLink to="aboutSection" smooth={true} duration={500} offset={0} onClick={() => setIsNavOpen(false)}>
                      <li>About us</li>
                    </ScrollLink>
                    <ScrollLink to="teamsSection" smooth={true} duration={500} offset={0} onClick={() => setIsNavOpen(false)}>
                      <li>Team</li>
                    </ScrollLink>
                    <ScrollLink to="tokenSection" smooth={true} duration={500} offset={0} onClick={() => setIsNavOpen(false)}>
                      <li>Token</li>
                    </ScrollLink>
                    <ScrollLink to="howToBuySection" smooth={true} duration={500} offset={0} onClick={() => setIsNavOpen(false)}>
                      <li>How to buy/Join IDO</li>
                    </ScrollLink>
                    <ScrollLink to="partnersSection" smooth={true} duration={500} offset={0} onClick={() => setIsNavOpen(false)}>
                      <li>Partners</li>
                    </ScrollLink>
                    <a href='/disclaimer.docx' download
                      onClick={() => {
                        setIsDisclaimerVisible(!isDisclaimerVisible)
                        setIsNavOpen(false)
                      }}>
                      <li>Disclaimer</li>
                    </a>
                  </div>
                </div>
              </div>}
          </div>
        </div>

        <div className={styles.heroSection}>
          <div className={styles.lhs} data-aos="zoom-out-right">
            <div className={styles.lhs__text}>
              <h2>The important Crypto trading tools, <span>All in one platform.</span></h2>
              <p>Trade seamlessly and efficiently. The integration of different efficient crypto trading tools <span>powered by AI.</span></p>
            </div>
            <div className={styles.lhs__actionButtons}>
              <ScrollLink to="stayUpdated"
                onClick={() => {
                  setGetNotifiedIsActive(true)
                  inputRef.current && inputRef.current.focus()
                }} smooth={true} duration={500} offset={0}>
                <button>Stay Updated</button>
              </ScrollLink>
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

        <div className={styles.aboutSection} data-aos="zoom-out" id='aboutSection'>
          <h2>About AITools</h2>
          <div className={styles.aboutSection__icon}>
            <TradeSaveTimeIcon />
          </div>
          <p>Imagine being able to access all necessary tools needed to trade Crypto and save time, minimizes stress, maximize profits and also allows you to trade to your fullest potential. AITools gives you the power to do that one just one platform.</p>
          <div className={styles.aboutSection__tokenInfo}>
            <div className={styles.header}>
              <h4>AITool Token</h4>
              <span>The Platform&apos;s backbone</span>
            </div>
            <p>Built on Binance Smart Chain, AIT is the native super-utility and governance token to AITools Ecoystem and platform that serves as its ultimate backbone.
              Holders can take part in the platform&apos;s governance and participate in shaping its future along with many other benefits.</p>
          </div>
        </div>

        <div className={styles.createSection}>
          <div className={styles.lhs}>
            <h4>Create your own trading terms</h4>
            <p>In only a few clicks, use the native web app to access any tool you want.</p>
            <div className={styles.lhs__activities}>
              {activities.map((eachActivity, index) => (
                <div className={styles.activity} key={index}>
                  <h4>{eachActivity.title}</h4>
                  {eachActivity.text.length < 2 ?
                    <span data-aos="zoom-out-up">{eachActivity.text[0]}</span> :
                    <div className={styles.activityGrp}>
                      {eachActivity.text.map((activityText, index) => (
                        <span data-aos="zoom-out-up" key={index}>{activityText}</span>
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
          {/* <span className='line'></span> */}
        </div>

        <div className={styles.partnersSection} id="partnersSection">
          <h2>Partners</h2>
          <div className={styles.partnersSection__list}>
            {partnersData.map((eachPartner, index) =>
              <span key={index}>
                <Image src={eachPartner.image} alt="app image" />
              </span>)}
          </div>
        </div>

        <div className={styles.updateSection} data-aos="fade-up">
          <div className={styles.updateSection__topIcon}>
            <UpdateNotificationIcon />
          </div>
          <div className={styles.updateSection__content}>
            <h4>Stay Updated</h4>
            <p>To stay informed about product development and launch details, you can click the &apos;Stay Updated&apos; button below.</p>
            <div className={styles.actionButtons}>
              <ScrollLink to="stayUpdated"
                onClick={() => {
                  setGetNotifiedIsActive(true)
                  inputRef.current && inputRef.current.focus()
                }} smooth={true} duration={500} offset={0}>
                <button>Stay Updated</button>
              </ScrollLink>
              <button className={styles.textBtn}>Read whitepaper</button>
            </div>
          </div>
        </div>

        <div className={styles.roadmapSection}>
          <h2>Roadmap</h2>
          <div className={styles.roadmapContainer}>
            {roadmapData.map((eachSegmentActivity, index) =>
              <div className={styles.eachRoadMap} key={index}>
                <span className={styles.eachRoadMap__title}>{eachSegmentActivity.segment}</span>
                <div className={styles.eachRoadMap__line}><span></span></div>
                <div className={styles.eachRoadMap__activity}>
                  {eachSegmentActivity.activities.map((eachActivity, index) =>
                    <li key={index}>{eachActivity}</li>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.teamsSection} id='teamsSection'>
          <h2>Team</h2>
          <div className={styles.teamsSection__info}>
            <p>AITools was founded by Michael Keith with the mission of creating an all-in-one, cost efficient, energy efficient, platform that contains necessary tools for every crypto trader.</p>
            <p>The AITools team includes seasoned crypto traders, researchers, entrepreneurs, and marketers. Our core platform and AI teams are further complemented by specialized teams devoted to application areas such as finance, Blockchain technology, De-Fi, AI.</p>
          </div>
          <div className={styles.teamsContainer}>
            {teamData.map((eachTeamInfo, index) => (
              <div className={styles.eachTeamMember} key={index}>
                <div className={styles.eachTeamMember__image}>
                  <Image src={eachTeamInfo.image} alt="Team member picture" />
                </div>
                <div className={styles.eachTeamMember__info}>
                  <h6>{eachTeamInfo.name}</h6>
                  <p>{eachTeamInfo.role}</p>
                </div>
                <Link href={eachTeamInfo.twitterLink} target="_blank">
                  <button>Twitter</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.howToBuySection} id='howToBuySection'>
        <div className={styles.howToBuySection__lhs}>
          <div className={styles.image}><Image src={images.coming_soon} alt='coming soon' /></div>
        </div>
        <div className={styles.howToBuySection__rhs}>
          <h3>Join <span>IDO</span></h3>
          <p>Coming soon!</p>
          <div className={styles.telegramArea}>
            <p>Join telegram channel <ArrowUpIcon /></p>
            <button>Join channel</button>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.getNotifiedSection} id="stayUpdated" style={getNotifiedIsActive ? { borderColor: '#d1afff', boxShadow: '0px 0px 8px 2px rgba(209, 175, 255, 0.25)' } : {}}>
          <h2>Get Notified</h2>
          <div className={styles.getNotifiedSection__input}>
            <input type='text' placeholder='Your email' ref={inputRef} />
            <button>Send</button>
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
