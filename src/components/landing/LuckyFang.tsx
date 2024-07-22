import React from 'react';
import styles from "../../app/page.module.css";

import localFont from "@next/font/local";
const sharpGroteskBold = localFont({ src: "../../assets/fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf" });

const LuckyFang = () => {
    return (
        <div className={`${styles.luckyFang} d-flex flex-column justify-content-between`}>
            <h2 className={`${sharpGroteskBold.className} casino`}>WAIT… WHAT CASINO? </h2>

            <p className={styles.fangDollar}>$FANG isn&apos;t just some everyday Retarded token. Yeah, We&apos;re a meme but doesn&apos;t mean we shouldn&apos;t have plans to ACTUALLY prove what we&apos;re doing as a Team is a BIG DEAL. We are building a Full Fledged Online Casino called LUCKY FANG (I know…. Got a Nice ring to it lol… Named it myself) </p>
        </div>
    )
}

export default LuckyFang