import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Opensea from "../../assets/logos/opensea-logo-2.svg"
const SocialMedia = {
    socialmedia: [
        {
            id: 1,
            name: 'TWITTER_',
            icon: faTwitter,
            url: 'https://twitter.com/PowerSurgeNFT',
            iconType: 'fontawesome'
        },
        {
            id: 2,
            name: 'DISCORD_',
            icon: faDiscord,
            url: 'https://discord.gg/7HCXZWHNw2',
            iconType: 'fontawesome'
        },
        {
            id: 3,
            name: 'OPENSEA_',
            icon: Opensea,
            url: 'https://opensea.io/collection/powersurgenft',
            iconType: 'svg'
        }
    ]
}

export default SocialMedia