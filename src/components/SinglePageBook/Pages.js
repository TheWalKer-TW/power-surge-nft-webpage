import Page1 from "../../assets/book/page1.png"
import Page2 from "../../assets/book/page2.jpg"
import Page3 from "../../assets/book/page3.jpeg"
import Page4 from "../../assets/book/page4.png"

const Pages = {
    pages: [
        {
            id: 1,
            name: "intro",
            image: Page1,
            description: 'Introduction to the project and mint functionality',
        },
        {
            id: 2,
            name: "story",
            image: Page2,
            description: 'Little comic introducing the story behind the NFT collection',
        },
        {
            id: 3,
            name: "roadmap",
            image: Page3,
            description: 'Roadmap of the PowerSurge NFT project',
        },
        {
            id: 4,
            name: "team",
            image: Page4,
            description: 'Page with all the team members',
        }
    ]
}

export default Pages