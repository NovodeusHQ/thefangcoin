import React from 'react';
import styles from "../../app/page.module.css";
import Image from 'next/image';
import { images } from '@/exports/images';

import localFont from "@next/font/local";
const sharpGroteskBold = localFont({ src: "../../assets/fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf" });

const TopBanner = () => {
    return (
        <div className={styles.topBanner}>
            {/* <Image src={images.Stars} alt="stars" className={`${styles.stars1}`} />
            <Image src={images.Stars} alt="stars" className={`${styles.stars2}`} /> */}
            <Image src={images.FANG} alt="$FANG" className={`${styles.fang} img-fluid`} />

            <h1 className={`${styles.topBannerText} ${sharpGroteskBold.className} gradient-text`}>FANG<br />COIN</h1>

            <div className="row px-5">
                <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
                    THE WORLD IS YOURS
                </div>

                <div className={`${styles.contractAddress} col-12 col-md-8`}>
                    Contract Address: Turn on Notifications on X for Presale and Contract Address updates!

                </div>
            </div>

        </div>
    )
}

export default TopBanner;