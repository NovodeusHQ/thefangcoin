import React from 'react';
import { images } from '@/exports/images';
import Image from 'next/image';

const Collaborators = () => {
    return (
        <div className='d-flex flex-column align-items-center components-container'>
            <h2 className='mb-4'>Collaborators</h2>

            <div className='d-md-flex'>

                <div className='collaborators-tiles mb-5 mb-md-0 me-md-5'>
                    <Image src={images.AYB} alt="All Your Base" className='mb-1' />
                    <h5>All Your Base</h5>
                    <p>
                        Partnering with us to launch the $FANG token presale, leveraging their success to boost our credibility and reach.
                    </p>
                </div>

                <div className='collaborators-tiles '>
                    <Image src={images.NUXGame} alt="NUX Games" className='mb-1' />
                    <h5>NUX Games</h5>
                    <p>
                        Ensuring our licensing and gaming platform integration, providing the robust framework needed for a seamless gaming experience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Collaborators;