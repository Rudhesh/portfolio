export const config = {
    developer: {
        name: "Rudesh",
        fullName: "Rudesh Dhote",
        title: "Full Stack Software Developer | Python & AI Applications",
        description: "Full Stack Software Developer with professional experience building web applications, analytics dashboards, and REST APIs. Experienced in React, Next.js, TypeScript, and Node.js, with hands-on project work in Python, RAG systems, and Google Gemini API integration."
    },
    social: {
        github: "Rudhesh",
        email: "rudeshdhote@gmail.com",
        location: "Wildeshausen, Germany",
        phone: "+49 1520 4385022",
        portfolio: "https://my-portfolio-1991.netlify.app"
    },
    about: {
        title: "About Me",
        description: "I am a Full Stack Software Developer based in Wildeshausen, Germany, with professional experience building robust web applications, analytics dashboards, and REST APIs. My core expertise spans React, Next.js, TypeScript, JavaScript, and Node.js, backed by hands-on engineering in Python and Retrieval-Augmented Generation (RAG). Currently expanding into Generative AI application development—integrating LLMs, embeddings, and vector databases like ChromaDB and Qdrant with Google's Gemini API. With a prior background in graphic design and UI/UX (Figma, Photoshop), I combine engineering rigor with clean visual design to build useful, reliable software."
    },
    experiences: [
        {
            position: "Software Developer",
            company: "Breitfuss Messtechnik GmbH",
            period: "2023 - 2024",
            location: "Germany",
            description: "Built a robust analytics dashboard application using Next.js 13 and Tailwind CSS. Developed responsive user-interface components, data visualizations, and frontend architecture.",
            responsibilities: [
                "Developed analytics dashboard application with Next.js 13 & Tailwind CSS",
                "Created reusable, accessible UI components with high performance",
                "Architected modern frontend workflows and state management",
                "Collaborated on UX design and data presentation"
            ],
            technologies: ["Next.js 13", "Tailwind CSS", "TypeScript", "REST APIs", "UI/UX"]
        },
        {
            position: "Junior Software Developer",
            company: "Breeze Technologies",
            period: "2022 - 2023",
            location: "Germany",
            description: "Developed frontend features with React, TypeScript, and Redux; built and maintained backend functionality using Node.js and Express.js. Optimized response times and supported Azure deployments.",
            responsibilities: [
                "Engineered responsive UI features using React, TypeScript, and Redux",
                "Maintained and expanded backend services with Node.js and Express.js",
                "Improved REST API response times, component reusability, and code quality",
                "Supported deployments on Microsoft Azure; used Git and Bitbucket in agile sprints"
            ],
            technologies: ["React", "TypeScript", "Redux", "Node.js", "Express.js", "Azure", "Git", "Bitbucket"]
        },
        {
            position: "Full Stack Web Developer Intern",
            company: "Active IT Recruitment",
            period: "2021 - 2022",
            location: "Germany",
            description: "Refactored the primary search-bar component of a CRM application. Delegated filtering logic across frontend and backend for improved speed and reusability.",
            responsibilities: [
                "Refactored CRM search and filtering components",
                "Enhanced component modularity and eliminated legacy code",
                "Conducted bug fixes and performance optimizations"
            ],
            technologies: ["React", "JavaScript", "Node.js", "REST APIs", "CRM Architecture"]
        },
        {
            position: "Full Stack Web Development",
            company: "Digital Career Institute (DCI), Berlin",
            period: "2021 - 2022",
            location: "Berlin, Germany",
            description: "Completed intensive one-year full-time training covering the MERN stack (MongoDB, Express, React, Node.js) with multiple end-to-end practical projects.",
            responsibilities: [
                "Mastered modern JavaScript, React, Node.js, Express, and databases",
                "Built and deployed full-stack web applications and REST APIs",
                "Collaborated on agile team projects with Git version control"
            ],
            technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "JavaScript"]
        },
        {
            position: "Graphic Designer",
            company: "ONIDA & Onlinebecho",
            period: "2017 - 2020",
            location: "Design Studios",
            description: "Professional creative design experience developing brand identities, promotional collateral, digital graphics, and UI assets.",
            responsibilities: [
                "Designed digital and print media assets, banners, and brand identities",
                "Created UI design mockups and creative visual concepts",
                "Mastered industry-standard creative tools"
            ],
            technologies: ["Photoshop", "Illustrator", "After Effects", "Figma", "UI Design"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Porsche 918 Spyder AI RAG",
            category: "Generative AI / RAG",
            technologies: "Python, FastAPI, Google Gemini API, Qdrant Cloud, Embeddings, Next.js",
            image: "/images/placeholder.webp",
            description: "AI-powered question-answering system specialized in the Porsche 918 Spyder. Features website content ingestion, semantic text chunking, vector embeddings stored in Qdrant Cloud, and context retrieval connected to Google Gemini with a FastAPI backend and Next.js frontend.",
            link: "https://github.com/Rudhesh"
        },
        {
            id: 2,
            title: "Document-Based RAG Application",
            category: "AI / Semantic Retrieval",
            technologies: "Python, Google Gemini API, ChromaDB, Sentence Embeddings, FastAPI",
            image: "/images/placeholder.webp",
            description: "Document question-answering workflow featuring automated document parsing, semantic chunking, and ChromaDB vector search to retrieve relevant passages and provide grounded context to the Gemini LLM for hallucination-free answers.",
            link: "https://github.com/Rudhesh"
        },
        {
            id: 3,
            title: "Analytics Dashboard Application",
            category: "Full-Stack Web App",
            technologies: "Next.js 13, Tailwind CSS, TypeScript, REST APIs, Recharts",
            image: "/images/placeholder.webp",
            description: "High-performance enterprise analytics dashboard built with Next.js 13 and Tailwind CSS. Features modular data visualization components, real-time KPI metrics, and responsive UI architecture.",
            link: "https://github.com/Rudhesh"
        },
        {
            id: 4,
            title: "Secret Track Store",
            category: "Full-Stack E-Commerce",
            technologies: "React, Node.js, Express, REST APIs, Tailwind CSS",
            image: "/images/placeholder.webp",
            description: "Full-stack record and music store web application featuring product catalog browsing, dynamic filtering, shopping cart functionality, and responsive UI design.",
            link: "https://secret-track.netlify.app/"
        },
        {
            id: 5,
            title: "Weather Forecast & News",
            category: "Web Application",
            technologies: "React, JavaScript, OpenWeather API, News API, CSS3",
            image: "/images/placeholder.webp",
            description: "Interactive real-time weather forecasting and live news headline aggregation platform with location search, multi-day forecasts, and smooth animations.",
            link: "https://brave-ramanujan-6b96c1.netlify.app/"
        },
        {
            id: 6,
            title: "Interactive Memory & Adventure Games",
            category: "Interactive Games",
            technologies: "JavaScript, HTML5 Canvas, CSS3 Animations",
            image: "/images/placeholder.webp",
            description: "Engaging interactive browser games featuring procedural game state logic, score tracking, card matching mechanics, and responsive canvas animations.",
            link: "https://hungry-brown-ce19d2.netlify.app/"
        }
    ],
    contact: {
        email: "rudeshdhote@gmail.com",
        github: "https://github.com/Rudhesh",
        linkedin: "https://www.linkedin.com/in/rudesh-dhote-a00a22208/",
        phone: "+49 1520 4385022",
        portfolio: "https://my-portfolio-1991.netlify.app",
        location: "Wildeshausen, Germany"
    },
    skills: {
        develop: {
            title: "FULL STACK & APIS",
            description: "Modern web applications & scalable cloud services",
            details: "Building responsive, high-performance web applications using React, Next.js, TypeScript, JavaScript, and Node.js. Experienced in analytics dashboards, component architecture, REST APIs, Express, and Microsoft Azure deployments.",
            tools: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js", "Redux", "Tailwind CSS", "REST APIs", "Azure", "Docker", "Git", "Jest"]
        },
        design: {
            title: "AI & RAG APPLICATIONS",
            description: "LLM integration, embeddings, vector databases & UI design",
            details: "Developing intelligent AI applications with Python, FastAPI, Google Gemini API, ChromaDB, and Qdrant Cloud. Combining Retrieval-Augmented Generation (RAG) and semantic search with creative UI/UX design in Figma and Photoshop.",
            tools: ["Python", "Google Gemini API", "RAG Systems", "ChromaDB", "Qdrant", "FastAPI", "MongoDB", "MySQL", "Figma", "Photoshop", "Illustrator", "After Effects"]
        }
    }
};
