import React from 'react';
import Image from 'next/image';
import { images, icons } from '@/exports/images';
import styles from "../../app/page.module.css";

import localFont from "@next/font/local";
const sharpGroteskBold = localFont({ src: "../../assets/fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf" });



const Tokenomics = () => {
    return (
        <div className="components-container tokenomics">
            <h2 className={`${styles.gradientSubheader} ${sharpGroteskBold.className} gradient-text`}>TOKENOMICS</h2>

            <div className="row">
                <div className="col-6">
                    <Image src={images.Coins} alt="Tokenomics coins" className='img-fluid' />
                </div>

                <div className="col-6 d-flex flex-column justify-content-between">
                    <div className="row mb-4">
                        <div className="col-4">
                            <Image src={icons.tokenomics} alt="Tokenomics point" className='img-fluid' />
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <h3 className={`${sharpGroteskBold.className} tokenomicsPoints`}>70% OF SUPPLY TO LIQUIDITY</h3>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-4">
                            <Image src={icons.tokenomics} alt="Tokenomics point" className='img-fluid' />
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <h3 className={`${sharpGroteskBold.className} tokenomicsPoints`}>10% MARKETING</h3>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-4">
                            <Image src={icons.tokenomics} alt="Tokenomics point" className='img-fluid' />
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <h3 className={`${sharpGroteskBold.className} tokenomicsPoints`}>10% CEX LISTING</h3>
                        </div>

                    </div>

                    <div className="row mb-4">
                        <div className="col-4">
                            <Image src={icons.tokenomics} alt="Tokenomics point" className='img-fluid' />
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <h3 className={`${sharpGroteskBold.className} tokenomicsPoints`}>10% TREASURY</h3>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tokenomics;