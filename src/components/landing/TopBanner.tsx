import React from 'react';
import styles from "../../app/page.module.css";
import Image from 'next/image';
import { images } from '@/exports/images';
import Socials from '../reusables/Socials';

import localFont from "@next/font/local";
const sharpGroteskBold = localFont({ src: "../../assets/fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf" });

const TopBanner = () => {
    return (
        <div className={styles.topBanner}>
            <Image src={images.FANG} alt="$FANG" className={`${styles.fang} img-fluid`} data-aos="zoom-in" data-aos-ease="ease-in" data-aos-duration="1500" />
            <Image src={images.Stars} alt="stars" className={`${styles.stars1}`} />
            <Image src={images.Stars} alt="stars" className={`${styles.stars2}`} />

            {/* <hgroup className={`${styles.topBannerText} ${sharpGroteskBold.className}`}>

                <h1 id='fang'>FANG</h1>

                <h1 id='coin'>COIN</h1>
            </hgroup> */}

            <hgroup className={`${styles.topBannerText} ${sharpGroteskBold.className}`}>
                <div data-aos="fade-down" data-aos-ease="ease-in" data-aos-duration="1500">
                    <h1 id='fang'>FANG</h1>
                </div>

                <h1 id='coin' className='gradient-text' data-aos="fade-up" data-aos-ease="ease-in" data-aos-duration="1500">COIN</h1>
            </hgroup>

            <div className="row px-5 move-to-fore d-flex justify-content-between">
                <div className="col-12 col-md-4 mb-4 mb-md-0 gradient-text world-is-yours">
                    <p>THE WORLD IS YOURS</p>
                    <Socials color='white' />
                </div>

                <div className={`${styles.contractAddress} col-12 col-md-8`}>
                    Contract Address: Turn on Notifications on X for Presale and Contract Address updates!

                </div>
            </div>

        </div>
    )
}

export default TopBanner;