import React from 'react';
import Image from 'next/image';
import { icons } from '@/exports/images';
import { SocialsProps, ISocials } from '@/types/components';
import Link from 'next/link';

const Socials: React.FC<SocialsProps> = ({ color }) => {
    const socials: Array<ISocials> = [
        {
            name: 'twitter',
            logo: icons.twitter
        },
        {
            name: 'telegram',
            logo: icons.telegram
        },
        {
            name: 'twitter',
            logo: icons.dexscreener
        },
    ]

    return (
        <div className='row'>
            {socials.map((social, idx) => {
                return (
                    <div key={idx}
                        style={{ backgroundColor: color }}
                        className='d-flex justify-content-center align-items-center mx-2 socials'
                    >
                        <Link href="#!">
                            <Image src={social.logo} alt={`${social.name} account`}  />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Socials;