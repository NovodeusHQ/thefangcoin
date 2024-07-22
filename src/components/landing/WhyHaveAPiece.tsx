import React from 'react';
import { images } from '@/exports/images';
import Image from 'next/image';
import styles from "../../app/page.module.css";

import localFont from "@next/font/local";
const sharpGroteskBold = localFont({ src: "../../assets/fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf" });

const WhyHaveAPiece = () => {
    return (
        <div className='px-5 d-flex flex-column align-items-center components-container'>
            <h2 className={`${styles.gradientSubheader} ${sharpGroteskBold.className} gradient-text`}>WHY HAVE A PIECE OF THE CAKE… WHEN YOU CAN HAVE IT ALL</h2>

            <Image src={images.FabulousVegas} alt="fabulous vegas" className='img-fluid'/>

            <p className={styles.welcomeToMyWorld}>Welcome to My World. Brace yourselves, The only P**ies we let in here are… You know what kind. Now, Back to Business. I want you onboard. I need you to Quit your damn job and get on this Train. $FANG doesn&apos;t just wanna give you that 100x.. Hell, We&apos;d cut you a bag off the Casino Profits </p>
        </div>
    )
}

export default WhyHaveAPiece


