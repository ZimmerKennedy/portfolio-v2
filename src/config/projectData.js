import notflix from "../assets/images/Notflix-Preview.png"
import onTheGo from "../assets/images/onTheGo.png"
import portfolioV1 from "../assets/images/portfolioV1.png"
import pangea from "../assets/images/pangea.png"

export const projects = [
    {
        id:1,
        name:"On The Go",
        tags:["React","Redux","TailwindCSS", "Stripe", "Priceline.com API", "Node.JS", "Javascript", "Render", "Vercel" ],
        description:"Cutting-edge ticket booking website, where you can easily search and book flights, car rentals, and hotels for your next adventure. With seamless Stripe integration and powered by Priceline's API.",
        imgSrc:onTheGo,
        demo:"https://on-the-go-v2.vercel.app/",
        github:"https://github.com/ZimmerKennedy/On-The-Go-v2"
    },
    {
        id:2,
        name:"Notflix",
        tags:["React","Redux","Javascript","CSS", "Google Auth", "Firebase", "Stripe", "TMDB API"],
        description:"Netflix-inspired Web App, complete with monthly subscription options and secure Stripe integration ",
        imgSrc:notflix,
        demo:"https://web-app-clone-netflix.web.app/",
        github:"https://github.com/ZimmerKennedy/Notflix"
    },
    {
        id:3,
        name:"Pangea",
        tags:["React","Redux","styled-components", "postgreSQL", "Node.JS", "Express.JS" ],
        description:"A powerful web application designed to connect tenants and landlords.",
        imgSrc:pangea,
        demo:"https://github.com/Pangea-Capstone-Project/Pangea/tree/78988c423e0c4b47bea67ae1179b0d9209f3ba96",
        github:"https://github.com/Pangea-Capstone-Project/Pangea"
    },
    {
        id:4,
        name:"Portfolio",
        description:"A responsive portfolio.",
        tags:["React","Three.js","Vercel", "CSS", "Javascript", "Vercel"],
        imgSrc:portfolioV1,
        demo:"https://zimmerkennedy.com/",
        github:"https://github.com/ZimmerKennedy/personal-portfolio"
    },
] 