export const skills = [
    {
        title: 'JavaScript',
        stars: 4
    },
    {
        title: 'React JS',
        stars: 4
    },
    {
        title: 'React Hooks',
        stars: 4
    },
    {
        title: 'HTML',
        stars: 3
    },
    {
        title: 'CSS',
        stars: 4
    },
    {
        title: 'Redux',
        stars: 4
    },
    {
        title: 'ES6',
        stars: 4
    },
    {
        title: 'Jest',
        stars: 3
    },
    {
        title: 'Jasmine',
        stars: 3
    },
    {
        title: 'Webpack',
        stars: 3
    },
    {
        title: 'Node JS',
        stars: 2
    },
    {
        title: 'Babel',
        stars: 2
    },
    {
        title: 'ESLint',
        stars: 2
    }
];

export const tools = [
    {
        title: 'VS Code',
        stars: 4
    },
    {
        title: 'Sublime Text',
        stars: 3
    },
    {
        title: 'GIT',
        stars: 4
    },
    {
        title: 'MS Office',
        stars: 3
    },
    {
        title: 'Jenkins',
        stars: 2
    },
    {
        title: 'JIRA',
        stars: 3
    },
    {
        title: 'Invision',
        stars: 2
    }
];

export const user = {
    name: "Amit Chauhan",
    email: "a.a.chauhan2009@gmail.com",
    mobile: "9840806628",
    location: "Pune",
    langagues: ["English", "Hindi", "Gujarati"],
    website: "https://blog.amitchauhan.co.in",
    github: "https://github.com/aachauhan2009/",
    title: "Frontend Developer",
    about: "Passionate developer who loves to write readable, scalable, high performance and testable code with 11 in various frontend technologies and domains like banking, travel, insight analytics. Enjoys helping with colleagues and online users."
}

export const education = [{
    degree: "B.E in Electronics and Communication",
    college: "Shantilal Shah Engineering college, Bhavnagar, Gujarat",
    start: "2008",
    end: "2012"
}]

export const experience = [
    {
        "company": "Bajaj Finserv Health",
        "designation": "Senior Architect",
        "from": "03-2020",
        "to": "Present",
        "jobDescription": [
            {
                "project": "React Native Applications",
                "projectDescription": [
                    "Established a comprehensive architecture for React Native applications incorporating linting and unit testing setups",
                    "Improved maintainability by refactoring codebases and implementing best practices",
                    "Developed CI/CD pipelines to automate the process from testing builds to releasing on the Play Store and App Store",
                    "Implemented CodePush for seamless feature testing across multiple environments without the need for new APK downloads"
                ]
            },
            {
                "project": "Micro Frontend Architecture",
                "projectDescription": [
                    "Formed a Frontend Core Team to manage common themes and modules",
                    "Designed and executed a micro frontend architecture to facilitate modular development",
                    "Architected and implemented a Design Language System reusable across both React and React Native projects"
                ]
            },
            {
                "project": "Community Building and Knowledge Sharing",
                "projectDescription": [
                    "Initiated and led monthly tech sessions and workshops for frontend developers to foster continuous learning and knowledge sharing"
                ]
            },
            {
                "project": "Leadership in Labs Vertical",
                "projectDescription": [
                    "Served as Squad Lead for the Labs vertical, managing a team of 15 comprising frontend (app and web) and backend developers",
                    "Led the team to deliver innovative solutions and projects, ensuring collaboration and efficient project management"
                ]
            }
        ]
    },
    {
        company: "Market Logic Software",
        designation: "Senior Frontend Engineer",
        from: "11-2019",
        to: "03-2020",
        jobDescription: [{
            project: "",
            projectDescription: [
                "Added new features to existing application",
                "Introduced React Testing library to add integration tests",
                "Understood micro-frontend architecture and helped other teammates to understand"
            ]
        }]
    }, {
        company: "Flight Network",
        designation: "Frontend Developer",
        from: "10-2017",
        to: "10-2019",
        jobDescription: [
            {
                project: "Flight Network Website",
                projectDescription: [
                    "Played major role in re-branding legacy design to modern design",
                    "Co-created themeable css design system to easily create and apply new theme using css-grid, scss and css-modules",
                    "Introduced code splitting to reduce bundle size and increased site speed along with pre-rendering of home page for SEO"
                ]
            }, {
                project: "Mark-up Portal UI",
                projectDescription: [
                    "Migrated old monolithic app to React app",
                    "Introduced new features like bulk update and advance client side validation with tables"
                ]
            }
        ]
    }, {
        company: "Cognizant",
        designation: "Associate Projects",
        from: "08-2016",
        to: "09-2017",
        jobDescription: [
            {
                project: "Banking Application",
                projectDescription: [
                    "Developed new features for banking applications using in-house jQuery based framework."
                ]
            }
        ]
    }, {
        company: "American Megatrends",
        designation: "Software Engineer",
        from: "05-2013",
        to: "08-2016",
        jobDescription: [{
            project: "",
            projectDescription: [
                "Designed and developed responsive website for AMIDuOS software using bootstrap and jQuery.",
                "Designed Analytics and reporting application to analyze and access database information easily using bootstrap, c3.js and Jquery.",
                "Designed and developed web application for creating dynamic template for digital signage software using React and redux."
            ]
        }]
    }]

export const resume = {
    user,
    experience,
    education,
    tools,
    skills
}