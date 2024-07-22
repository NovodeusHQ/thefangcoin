import React from 'react';
import Image from 'next/image';
import { icons } from '@/exports/images';
import styles from "../../app/page.module.css";

import localFont from "@next/font/local";
const sharpGroteskBold = localFont({ src: "../../assets/fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf" });

const SeriousStuff = () => {
    return (
        <div className='d-flex flex-column align-items-center components-container mt-5 mt-md-0'>
            <h2 className={`${sharpGroteskBold.className} ${styles.gradientSubheader} gradient-text`}>NOW LETS GET TO THE SERIOUS STUFF</h2>

            <div className={`${styles.seriousStuffPoints} ${styles.earnRewards} row mb-3`}>
                <div className="col-2 col-md-1 me-0 me-md-3">
                    <Image src={icons.CheckIcon} alt="checkIcon" />
                </div>

                <hgroup className="col-10">
                    <h3>Staking to Earn Rewards</h3>
                    <p>Stake your $FANG tokens to earn a share of Lucky Fang Casino&apos;s profits. Enjoy passive income while being part of an innovative and profitable ecosystem.</p>
                </hgroup>
            </div>


            <div className={`mb-3 d-flex flex-column flex-md-row align-items-center`}>
                <div className={`${styles.seriousStuffPoints} ${styles.governanceToken} mb-3 mb-md-0 me-md-4 row`}>
                    <div className="col-2">
                        <Image src={icons.CheckIcon} alt="checkIcon" />
                    </div>

                    <hgroup className="col-10">
                        <h3>Governance Token</h3>
                        <p>As a significant $FANG token holder, you gain voting rights. Influence key decisions and shape the future direction of Lucky Fang Casino through our governance token system.</p>
                    </hgroup>
                </div>

                <div className={`${styles.seriousStuffPoints} ${styles.raffleTickets} row`}>
                    <div className="col-2">
                        <Image src={icons.CheckIcon} alt="checkIcon" />
                    </div>

                    <hgroup className="col-10">
                        <h3>Raffle Tickets</h3>
                        <p>As a significant $FANG token holder, you gain voting rights. Influence key decisions and shape the future direction of Lucky Fang Casino through our governance token system.</p>
                    </hgroup>
                </div>
            </div>


            <div className={`${styles.seriousStuffPoints} ${styles.roadMap} row`}>
                <div className="col-2">
                    <Image src={icons.CheckIcon} alt="checkIcon" />
                </div>

                <hgroup className="col-10">
                    <h3>The Roadmap</h3>
                    <p>Our journey is meticulously planned to ensure sustainable growth and success. From the presale launch to the full-scale casino operation, every step is designed to enhance value and deliver exceptional experiences to our users.</p>
                </hgroup>
            </div>


        </div>
    )
}

export default SeriousStuff;