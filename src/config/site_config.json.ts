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
        { name: "Accepted Papers", href: "/JUST-NLP/accepted_papers" },
        { name: "Call for Papers", href: "/JUST-NLP/call" },
        { name: "Shared Task", href: "/JUST-NLP/task" },
        { name: "News", href: "/JUST-NLP/#news" },
        // { name: "Important Dates", href: "/JUST-NLP/#importantdates" },
        { name: "Program", href: "/JUST-NLP/#program" },
        { name: "Organizers", href: "/JUST-NLP/#organizers" },
    ],
    buttons: [
        { name: "Accepted Papers", href: "/JUST-NLP/accepted_papers" },
        { name: "Call for Papers", href: "/JUST-NLP/call" },
        { name: "Shared Task", href: "/JUST-NLP/task" },
    ],
    anthology_link: "",
    email_link: "mailto:legalaieval@gmail.com",
    youtube_link: "",
    x_link: "",
    github_link: "https://github.com/JustNLP",
    bluesky_link: "",
    program_events: [
        {
            start_time: "09:00",
            end_time: "09:15",
            description: "Introduction",
            papers: undefined
        },
        {
            start_time: "09:15",
            end_time: "10:00",
            description: "Invited talk 1: **Prof. Niraj Kumar**",
            papers: undefined
        },
        {
            start_time: "10:00",
            end_time: "10:30",
            description: "Paper presentations (10 mins talk + 5 mins Q&A)",
            papers: [
                { title: "**Grahak-Nyay: Consumer Grievance Redressal through Large Language Models**", authors: "" },
                { title: "**Nyay-Darpan: Enhancing Decision Making Through Summarization and Case Retrieval for Consumer Law in India**", authors: "" },
            ]
        },
        {
            start_time: "10:30",
            end_time: "11:00",
            description: "Coffee break",
            papers: undefined
        },
        {
            start_time: "11:00",
            end_time: "11:45",
            description: "Invited talk 2: **Nishi Yadav**",
            papers: undefined
        },
        {
            start_time: "11:45",
            end_time: "12:30",
            description: "Paper presentations (10 mins talk + 5 mins Q&A)",
            papers: [
                { title: "**LeCNet: A Legal Citation Network Benchmark Dataset**", authors: "" },
                { title: "**Legal Document Summarization: A Zero-shot Modular Agentic Workflow Approach**", authors: "" },
                { title: "**LLM Driven Legal Text Analytics: A Case Study For Food Safety Violation Cases**", authors: "" },
            ]
        },
        {
            start_time: "12:30",
            end_time: "14:00",
            description: "Lunch",
            papers: undefined
        },
        {
            start_time: "14:00",
            end_time: "14:45",
            description: "Shared tasks",
            papers: [
                { title: "Overview of Shared Tasks", authors: "" },
                { title: "**From Scratch to Fine-Tuned: A Comparative Study of Transformer Training Strategies for Legal Machine Translation**", authors: "" },
                { title: "**Contextors at L-SUMM: Retriever-Driven Multi-Generator Summarization**", authors: "" },
                { title: "**NIT-Surat@L-Sum: A Semantic Retrieval-Based Framework for Summarizing Indian Judicial Documents**", authors: "" },
            ]
        },
        {
            start_time: "14:45",
            end_time: "15:30",
            description: "Invited talk 3: **Arghya Bhattacharya**",
            papers: undefined
        },
        {
            start_time: "15:30",
            end_time: "16:00",
            description: "Coffee break",
            papers: undefined
        },
        {
            start_time: "16:00",
            end_time: "16:45",
            description: "Invited talk 4: **Joseph Pookkatt**",
            papers: undefined
        },
        {
            start_time: "16:45",
            end_time: "17:00",
            description: "Conclusion",
            papers: undefined
        },
    ],
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
    invited_speakers: [
    {
        image_path: "https://nludelhi.ac.in/wp-content/uploads/2024/02/Image-Faculty00003.jpg",
        name: "Prof. Niraj Kumar",
        affiliation: "Professor; Director, Centre for Comparative Law, National Law University, Delhi",
        // description: "Title: Artificiality of Law in reference to Artificial Intelligence\n\nAbstract: Have not shared yet.\n\nBio: Prof. Niraj Kumar is a Professor of Law and Director of the Centre for Comparative Law at National Law University Delhi. His expertise includes Constitutional Law, Administrative Law, Comparative Law, Environmental Law, and Legal Theory. He previously served as Additional Registrar (Research) at the Supreme Court of India (attached to the Chief Justice of India) from January 2019 to May 2021. He has authored books including 'The Indian Legal System: An Enquiry' (Oxford, 2019) and edited volumes of the Indian Yearbook of Comparative Law (Springer).",
        description: '',
        link: "https://nludelhi.ac.in/faculty/dr-niraj-kumar/"
    },
    {
        image_path: "https://www.ashoka.edu.in/wp-content/uploads/2021/04/Untitled-design-89.png",
        name: "Arghya Bhattacharya",
        affiliation: "Co-Founder & CTO, Adalat AI",
        // description: "Title: Building AI for India’s Courtrooms: Scaling Sovereign Voice & Language Systems Across 20% of the Judiciary\n\nAbstract: India hosts the world’s largest and most linguistically complex justice system. Over the last two years, Adalat AI has deployed voice and language AI in nearly 20% of Indian courtrooms, powering live transcription, dictation, translation, and document navigation at scale. This talk covers the ML stack, handling legal context across diverse tasks, and engineering sovereign, privacy-preserving AI for public institutions.\n\nBio: Arghya Bhattacharya is Co-Founder and CTO of Adalat AI. He holds a B.Tech in Computer Science and a Master's in AI from IIIT Hyderabad, with publications in ACL, EMNLP, CoNLL and EaMT. He previously worked on large-scale NLP systems and identity-verification infrastructure, and in 2025 was named to the Forbes 30 Under 30 Asia – Social Impact list for his work on accessible, rights-aligned AI for public institutions.",
        description: '',
        link: "https://adalat.ai"
    },
    {
        image_path: "/JUST-NLP/Joseph-Pookkatt.png",
        name: "Joseph Pookkatt",
        affiliation: "Co-founder, Staram Analytics",
        // description: "Title: Designing and Implementing Knowledge Graphs in the Legal Domain\n\nAbstract: Ontologies provide a common vocabulary to integrate heterogeneous legal data and enable semantic search and improved RAG (Retrieval-Augmented Generation). Knowledge Graphs (KGs) and GraphRAG capture logical relationships across semantically-distant concepts, offering higher-quality outputs than baseline RAG. In India, building a single unified KG is challenging; Staram demonstrates how smaller, use-case-specific graphs and LLM-inferred graph architectures can make KG-driven legal AI interoperable, accurate, and governable.\n\nBio: Joseph Pookkatt is a practising lawyer with 30+ years of experience at the intersection of corporate law, litigation, legal technology, AI, and entrepreneurship. He co-founded Staram Analytics and leads development of India’s first open-source legal knowledge graph.",
        description: '',
        link: "https://www.linkedin.com/in/joseph-pookkatt-66242839"
    },
    {
        image_path: "/JUST-NLP/Sampritha-Manjunath.png",
        name: "Sampritha Manjunath",
        affiliation: "Research Associate, University of Galway",
        // description: "Title: Designing and Implementing Knowledge Graphs in the Legal Domain\n\nAbstract: Ontologies provide a common vocabulary to integrate heterogeneous legal data and enable semantic search and improved RAG (Retrieval-Augmented Generation). Knowledge Graphs (KGs) and GraphRAG capture logical relationships across semantically-distant concepts, offering higher-quality outputs than baseline RAG. In India, building a single unified KG is challenging; Staram demonstrates how smaller, use-case-specific graphs and LLM-inferred graph architectures can make KG-driven legal AI interoperable, accurate, and governable.\n\nBio: Sampritha Manjunath is an NLP Data Scientist with 9+ years' experience in language models, knowledge graphs, RAG, and conversational AI. She is currently a Research Associate at the University of Galway, working on responsible and impactful AI systems.",
        description: '',
        link: "https://www.linkedin.com/in/sampritha-manjunath"
    },
    {
        image_path: "/JUST-NLP/Parth-Parikh.png",
        name: "Parth Parikh",
        affiliation: "AI Research Engineer, eSuccess AI Technologies",
        // description: "Title: Designing and Implementing Knowledge Graphs in the Legal Domain\n\nAbstract: Ontologies provide a common vocabulary to integrate heterogeneous legal data and enable semantic search and improved RAG (Retrieval-Augmented Generation). Knowledge Graphs (KGs) and GraphRAG capture logical relationships across semantically-distant concepts, offering higher-quality outputs than baseline RAG. In India, building a single unified KG is challenging; Staram demonstrates how smaller, use-case-specific graphs and LLM-inferred graph architectures can make KG-driven legal AI interoperable, accurate, and governable.\n\nBio: Parth Parikh is an AI Research Engineer working on legal NLP, knowledge graphs, and ontology-driven AI. He holds an M.Tech in Computer Science from IIT Bombay (2023) and focuses on structured legal representations and domain-adapted language models.",
        description: '',
        link: "https://www.linkedin.com/in/parthparikh713"
    },
    {
        image_path: "/JUST-NLP/Nishi-Yadav.png",
        name: "Nishi Yadav",
        affiliation: "Legal-Tech & Governance Consultant; worked with Government of Jharkhand",
        // description: "Title: Fixing the Process, Powering the System: What Jharkhand Teaches India About Legal-Tech\n\nAbstract: Jharkhand's legal-tech reforms prioritsed process redesign before digitisation, leading to significant reductions in case pendency and improved administrative workflows. This talk examines the Vidhi Portal and the Integrated Litigation Management System (ILMS) implementations, lessons for scaling digital governance, and the role of AI-enabled predictive governance to prevent litigation at source.\n\nBio: Nishi Yadav is an economist and lawyer with 11+ years PQE who has led legal-tech and governance reforms with the Government of Jharkhand, including design and implementation of ILMS. She has collaborated with IIT-Kanpur, IIT(ISM) Dhanbad and ministries on strategic governance projects.",
        description: '',
        link: "/JUST-NLP"
    }
],
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
        link: "https://sandeep82945.github.io/myprofile/"
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
