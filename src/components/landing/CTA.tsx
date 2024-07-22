import React from 'react';
import Image from 'next/image';
import { images } from '@/exports/images';

const CTA = () => {
  return (
    <div className='mt-3 mt-md-5 text-center'>
        <p className='joinUs'>
        Join us on this exciting journey as we redefine the online casino industry. With $FANG, you are not just an investor; you are part of a community that&apos;s shaping the future of entertainment and gaming. Stay connected, stay engaged, Stay Fanging Baby!
        </p>

        <Image src={images.BottomImage} alt="buttomImage" className='img-fluid buttomImage' />
    </div>
  )
}

export default CTA