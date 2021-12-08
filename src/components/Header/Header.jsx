import React from 'react'

import "./Header.css"
import SocialMedia from "../Navbar/SocialMedia"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className='header-social-media'>
            {SocialMedia.socialmedia.map((mediaitem) => (
                <a id={mediaitem.name} href={mediaitem.url} target="_blank" rel="noreferrer">
                    {(mediaitem.iconType === 'fontawesome') &&
                        <FontAwesomeIcon icon={mediaitem.icon} className='header-icon'></FontAwesomeIcon>
                    }
                    {(mediaitem.iconType === 'svg') &&
                        <img src={mediaitem.icon} alt={mediaitem.name} className='header-icon' />
                    }
                </a>
            ))}
        </div>
    )
}

export default Header
