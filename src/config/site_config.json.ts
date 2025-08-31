interface SiteConfig {
    website_url: string,
    banner_path: string,
    x_handle: string,
    keywords: string,
    authors: string,
    logo_path: string;
    name: string;
    description: string;
    main_conf: string;
    main_conf_link: string;
    location: string;
    date: string;
    nav_title: string;
    nav_items: Array<{ name: string; href: string }>;
    buttons: Array<{ name: string; href: string }>;
    anthology_link: string;
    email_link: string;
    youtube_link: string;
    x_link: string;
    github_link: string;
    bluesky_link: string;
    program_events: Array<{
        start_time: string;
        end_time: string;
        description: string;
        papers: Array<{ title: string; authors: string }> | undefined;
    }>;
    invited_speakers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        link: string;
    }>;
    panelists: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        link: string;
    }>;
    sponsors: Array<{
        image_path: string;
        link: string;
    }>;
    organizers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        link: string;
    }>;
    faq_items: Array<{
        question: string;
        answer: string;
    }>;
}

const site_config: SiteConfig = {
    website_url: "https://exploration-lab.github.io/JustNLP",
    banner_path: "2025/banner.png",
    x_handle: "@JustNLP",
    keywords: "JustNLP, IJCNLP - AACL, NLP, Workshop, XAI, Interpretability, Language Models, Explainability",
    authors: "JustNLP 2025 Organizers",
    logo_path: "/JUST-NLP/logo.png",
    name: "JustNLP 2025",
    description: "Workshop on NLP for Empowering Justice",
    main_conf: "IJCNLP - AACL 2025",
    main_conf_link: "https://2025.aaclnet.org/",
    location: "IIT Bombay, Mumbai, India",
    date: "December 24th, 2025",
    nav_title: "JustNLP",
    nav_items: [
        { name: "Call for Papers", href: "/JUST-NLP/call" },
        { name: "Shared Task", href: "/JUST-NLP/task" },
        { name: "News", href: "/JUST-NLP/#news" },
        { name: "Important Dates", href: "/JUST-NLP/#importantdates" },
        { name: "Program", href: "/JUST-NLP/#program" },
        { name: "Organizers", href: "/JUST-NLP/#organizers" },
    ],
    buttons: [
        { name: "Call for Papers", href: "/JUST-NLP/call" },
        { name: "Shared Task", href: "/JUST-NLP/task" },
    ],
    // anthology_link: "https://aclanthology.org/venues/JustNLP/",
    email_link: "mailto:legalaieval@gmail.com",
    // youtube_link: "https://www.youtube.com/@JustNLP",
    // x_link: "https://twitter.com/JustNLP",
    github_link: "https://github.com/JustNLP",
    // bluesky_link: "https://bsky.app/profile/JustNLP.bsky.social",
    program_events: [],
    // Example of program events
    // {
    //     "start_time": "9:00",
    //     "end_time": "9:10",
    //     "description": "Opening Remarks",
    //     papers: undefined
    // },
    // {
    //     "start_time": "9:10",
    //     "end_time": "10:00",
    //     "description": "Invited talk by **Speaker 1**",
    //     papers: undefined
    // },
    // {
    //     "start_time": "10:00",
    //     "end_time": "10:30",
    //     "description": "Oral presentations:",
    //     papers: [
    //         { title: "**Paper Title 1**", authors: "_Name Lastname, Name Lastname_" },
    //         { title: "**Paper Title 2**", authors: "_Name Lastname, Name Lastname_" },
    //     ]
    // },
    // {
    //     "start_time": "10:30",
    //     "end_time": "11:00",
    //     "description": "Break ☕",
    //     papers: undefined
    // },
    // {
    //     "start_time": "11:00",
    //     "end_time": "12:30",
    //     "description": "In-person & virtual **Poster Session 1**",
    //     papers: undefined
    // },
    // {
    //     "start_time": "12:30",
    //     "end_time": "14:00",
    //     "description": "Lunch 🥪",
    //     papers: undefined
    // },
    // {
    //     "start_time": "14:00",
    //     "end_time": "15:00",
    //     "description": "Invited talk by **Speaker 2**",
    //     papers: undefined
    // },
    // {
    //     "start_time": "15:00",
    //     "end_time": "15:30",
    //     "description": "Oral presentations:",
    //     papers: [
    //         { title: "**Paper Title 1**", authors: "_Name Lastname, Name Lastname_" },
    //         { title: "**Paper Title 2**", authors: "_Name Lastname, Name Lastname_" },
    //     ]
    // },
    // {
    //     start_time: '15:30',
    //     end_time: '16:00',
    //     description: 'Break ☕',
    //     papers: undefined
    // },
    // {
    //     start_time: '15:30',
    //     end_time: '16:30',
    //     description: 'In-person **Poster Session 2**',
    //     papers: undefined
    // },
    // {
    //     start_time: '16:30',
    //     end_time: '16:40',
    //     description: 'Closing remarks and awards',
    //     papers: undefined
    // },
    // {
    //     start_time: '16:40',
    //     end_time: '17:30',
    //     description: 'Panel discussion on **Topic**',
    //     papers: undefined
    // }
    invited_speakers: [],
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Speaker 1",
    //         affiliation: "Affiliation",
    //         description: "Talk name",
    //         link: "/JUST-NLP"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Speaker 2",
    //         affiliation: "Affiliation",
    //         description: "Talk name",
    //         link: "/JUST-NLP"
    //     }
    // ],
    panelists: [],
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 1",
    //         affiliation: "Affiliation",
    //         link: "/JUST-NLP"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 2",
    //         affiliation: "Affiliation",
    //         link: "/JUST-NLP"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 3",
    //         affiliation: "Affiliation",
    //         link: "/JUST-NLP"
    //     },
    //     {
    //         image_path: "https://www.svgrepo.com/show/105517/user-icon.svg",
    //         name: "Panelist 4",
    //         affiliation: "Affiliation",
    //         link: "/JUST-NLP"
    //     },
    // ],
    sponsors: [],
    //     {
    //         image_path: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Google_DeepMind_logo.png",
    //         link: "https://deepmind.google/"
    //     },
    //     {
    //         image_path: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",
    //         link: "https://machinelearning.apple.com/",
    //     }
    // ],
    organizers: [
    {
        image_path: "/JUST-NLP/Ashutosh-Modi.jpg",
        name: "Ashutosh Modi",
        affiliation: "Associate Professor, Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description: '',
        // description: "Specializes in Legal NLP, commonsense reasoning in LLMs, Sign Language Processing, and Multimodal Machine Learning. Area chair for ACL, NAACL, IJCAI, AAAI.",
        link: "https://ashutosh-modi.github.io/"
    },
    {
        image_path: "/JUST-NLP/Saptarshi-Ghosh.jpg",
        name: "Saptarshi Ghosh",
        affiliation: "Associate Professor, Indian Institute of Technology Kharagpur (IIT Kharagpur)",
        description: '',
        // description: "Research interests include Legal NLP, AI and Sustainability, Algorithmic bias and fairness. Section Editor of Artificial Intelligence and Law journal.",
        link: "https://sites.google.com/site/saptarshighosh/"
    },
    {
        image_path: "/JUST-NLP/Asif-Ekbal.jpg",
        name: "Asif Ekbal",
        affiliation: "Professor, Indian Institute of Technology Jodhpur (IIT Jodhpur)",
        description: '',
        // description: "Research interests: AI, NLP, Applied Machine Learning. Area Chair and Senior PC for top conferences, editorial board member for several journals.",
        link: "https://ekbalasif.github.io/"
    },
    {
        image_path: "/JUST-NLP/Pawan-Goyal.png",
        name: "Pawan Goyal",
        affiliation: "Associate Professor, Indian Institute of Technology Kharagpur (IIT Kharagpur)",
        description: '',
        // description: "Research interests: NLP, Legal NLP, Information Retrieval, Sanskrit Computational Linguistics.",
        link: "https://cse.iitkgp.ac.in/~pawang/"
    },
    {
        image_path: "/JUST-NLP/Sarika-Jain.png",
        name: "Sarika Jain",
        affiliation: "National Institute of Technology Kurukshetra (NITKKR), India",
        description: '',
        // description: "Research spans Neuro Symbolic AI, Language Models, Semantic Web, and NLP. Experienced in organizing conferences and Faculty Development Programs.",
        link: "https://sites.google.com/view/nitkkrsarikajain/"
    },
    {
        image_path: "/JUST-NLP/Abhinav-Joshi.png",
        name: "Abhinav Joshi",
        affiliation: "Ph.D. Student, Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description: '',
        // description: "Research in Natural Language Understanding (NLU), Multimodal Fusion, Sign Language processing, Legal text processing, Commonsense and Causal Reasoning.",
        link: "https://www.cse.iitk.ac.in/users/ajoshi/"
    },
    {
        image_path: "/JUST-NLP/Shivani-Mishra.jpg",
        name: "Shivani Mishra",
        affiliation: "Research Associate, Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description: '',
        // description: "Research focused on Legal NLP.",
        link: "mailto:shivanim@cse.iitk.ac.in"
    },
    {
        image_path: "/JUST-NLP/Shounak-Paul.png",
        name: "Shounak Paul",
        affiliation: "Ph.D. Student, Indian Institute of Technology Kharagpur (IIT Kharagpur), India",
        description: '',
        // description: "Research focuses on Legal NLP, specifically Legal Precedence and Statutes Retrieval.",
        link: "https://sites.google.com/view/shounakpaul95"
    },
    {
        image_path: "/JUST-NLP/Debtanu-Datta.png",
        name: "Debtanu Datta",
        affiliation: "Ph.D. Student, Indian Institute of Technology Kharagpur (IIT Kharagpur), India",
        description: '',
        // description: "Research on Legal NLP, specifically Cross-lingual Summarization and Machine Translation in Indian Legal domain.",
        link: "https://sites.google.com/view/debtanudatta/"
    },
    {
        image_path: "/JUST-NLP/Kshetrimayum-Boynao-Singh.jpg",
        name: "Kshetrimayum Boynao Singh",
        affiliation: "Senior Research Associate, IIT Patna; PhD Scholar, NIT Silchar",
        description: '',
        // description: "Specializes in multilingual NLP, machine translation, and low-resource modeling.",
        link: "mailto:boynfrancis@gmail.com"
    },
    {
        image_path: "/JUST-NLP/Sandeep-Kumar.jpg",
        name: "Sandeep Kumar",
        affiliation: "Ph.D. Student, Indian Institute of Technology Patna (IIT Patna), India",
        description: '',
        // description: "Research focuses on NLP, AI for science and AI security.",
        link: "mailto:sandeep.kumar82945@gmail.com"
    }
],
    faq_items: [
        {
            question: "Is it possible to take part in only one of the shared task?",
            answer: "Yes, participants can choose to take part in only one of the shared tasks. However, we encourage participants to engage with all tasks to gain a comprehensive understanding of the challenges and opportunities in Legal NLP."
        },
    ]
};

export default site_config;