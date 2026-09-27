import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'M.Hitesh',
    title: 'Software Engineer — ML & Backend',
    tagline: 'I build AI-powered systems and reliable backends — combining Python, Java, cloud, and modern AI to turn ideas into real-world applications.',
    email: 'manneruhitesh89@gmail.com',
    phone: '+91 76709****7',
    location: 'Anantapur, India',
    linkedin: 'https://www.linkedin.com/in/manneru-hitesh-35a426315/',
    github: 'https://github.com/Hitesh1065',
    resumeUrl: '/Manneru_Hitesh_Amazon_ML_Summer_School_2026 (1) (1).pdf',
    bio: [
      "I'm a computer science engineer who likes building things end to end — from backend systems and APIs to AI-powered applications and the infrastructure that makes them useful in the real world.",
      "Over the past few years I've been exploring software engineering through projects across backend development, AI/ML, cloud, and systems. I've built full-stack applications with React, FastAPI, Spring Boot, and PostgreSQL, worked with authentication and role-based systems, and experimented with AI services, OCR, RAG, and intelligent automation.",
      "I enjoy going beyond tutorials and understanding how things actually work under the hood — whether that's designing an exam platform, building an AI accessibility assistant, working with AWS services, implementing algorithms, or developing IoT systems. I've also participated in Smart India Hackathon and regularly practice DSA to strengthen my problem-solving skills.",
    ],
  },

  now: [
    'Building AI-powered and full-stack systems',
    'Going deeper into AWS, backend engineering & system design',
    'Exploring Agentic AI, RAG & ML',
    'Practicing DSA and competitive problem solving',
    'Looking for internships, hackathons & software engineering opportunities'
  ],
  experience: [
    {
      id: 1,
      company: 'AWS Club',
      companyUrl: 'YOUR_AWS_CLUB_LINK',
      role: 'AWS Club Core Team Member',
      period: '2024 — Present',
      location: 'GITAM, Visakhapatnam, India',
      description:
        'Contributing to the AWS Club by exploring cloud technologies, building hands-on projects, and helping fellow students learn and apply AWS through practical sessions and technical activities.',
      highlights: [
        'Worked with core AWS services including EC2, S3, Lambda, IAM, SQS, and container technologies through hands-on learning and case studies.',
        'Explored cloud architecture concepts including compute, storage, serverless applications, identity and access management, and event-driven systems.',
        'Contributed to technical discussions and learning activities focused on AWS, cloud computing, DevOps, and modern application development.',
        'Built and experimented with cloud-based projects to understand how applications move from local development to deployable infrastructure.',
        'Collaborated with other student developers through the AWS community, sharing technical knowledge and exploring practical cloud engineering workflows.',
      ],
      stack: [
        'AWS',
        'EC2',
        'S3',
        'Lambda',
        'IAM',
        'SQS',
        'Docker',
        'Linux',
        'Git',
        'GitHub'
      ],
    },
  ],

  education: [
    {
      id: 1,
      institution: 'Gandhi Institute of Technology and Management (GITAM)',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2024-2028',
      location: 'Vishakhapatnam, Andhra Pradesh, India',
    },
  ],

  // Skills, organized the way a request actually flows through a system.
  stack: [
    {
      layer: 'Frontend & Interfaces',
      note: 'where ideas become usable products',
      items: ['React.js', 'JavaScript', 'HTML / CSS', 'Vite'],
    },
    {
      layer: 'Backend & APIs',
      note: 'where the application logic lives',
      items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Node.js','REST APIs'],
    },
    {
      layer: 'Auth & Access',
      note: 'who can touch what, enforced top to bottom',
      items: ['RBAC', 'JWT', 'Step-up Auth', 'PostgreSQL RLS'],
    },
    {
      layer: 'Services & Logic',
      note: 'where the work happens',
      items: ['Go', 'Python', 'Microservices', 'Service Weaver', 'Event-Driven', 'Multi-Tenancy'],
    },
    {
      layer: 'Data & Storage',
      note: 'source of truth, plus the fast paths',
      items: ['PostgreSQL', 'Redis', 'SQLAlchemy','Pandas','numpy'],
    },
    {
      layer: 'AI & Machine Learning & retriveal',
      note: 'grounded answers over real documents',
      items: ['Scikit-learn','TensorFlow','RAG', 'OpenAI APIs', 'Embeddings','LangChain'],
    },
    {
      layer: 'Cloud & Infrastructure',
      note: 'learning to build, deploy, and scale beyond localhost',
      items: ['AWS', 'EC2', 'Lambda', 'AWS (S3)', 'GitHub Actions', 'IAM','SQS','Docker','Linux'],
    },
    
  ],

  languages: [ 'Python', 'Java', 'SQL', 'C','javascript'],

  projects: [
    {
      id: 1,
    
      title: 'Q-Health',
    
      tagline: 'Hybrid quantum-classical machine learning for biomedical risk prediction',
    
      category: 'Professional',
    
      featured: true,
    
      description:
        'A research-oriented healthcare ML platform that combines classical and quantum machine-learning workflows for biomedical disease-risk prediction. Q-Health provides a complete research pipeline for dataset registration, preprocessing, model training, evaluation, prediction, explainability, experiment tracking, and reproducible reporting.',
    
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Python',
        'FastAPI',
        'scikit-learn',
        'Pandas',
        'NumPy',
        'Qiskit',
        'Qiskit Machine Learning',
        'Qiskit Aer',
        'SHAP',
        'SQLAlchemy',
        'SQLite'
      ],
    
      highlights: [
    
        'Built a unified machine-learning pipeline supporting both classical and quantum estimators.',
    
        'Implemented models including Logistic Regression, SVM, Random Forest, VQC, QSVC, and QNN workflows.',
    
        'Created a FastAPI backend with dataset, experiment, model, training, prediction, comparison, and reporting APIs.',
    
        'Implemented measured feature and PCA preview workflows for exploring high-dimensional biomedical datasets.',
    
        'Added model explainability and research prediction workflows using SHAP and permutation-based analysis.',
    
        'Implemented experiment provenance with dataset hashing, model persistence, reproducible configurations, and research artifacts.',
    
        'Built an interactive React dashboard with a Quantum Lab, model comparison, experiment workflows, and research reports.',
    
        'Designed the platform as a local research prototype without requiring cloud inference or real quantum hardware.'
      ],
    
      githubLink: 'https://github.com/Hitesh1065/Q-Health',
      liveLink:'https://entanglex-q-health.onrender.com',
    
    },
    {
      id: 2,
      title: 'Project N',
      tagline: 'Full-Stack Netflix-Style Streaming Platform',
      category: 'Personal',
      featured: true,
      description:
        'A full-stack Netflix-inspired streaming platform built from the ground up with a React frontend and FastAPI backend. The platform provides JWT-based authentication, role-based admin access, movie management APIs, dynamic content rows, a hero banner, and a dedicated watch experience.',
      technologies: [
        'React',
        'Vite',
        'FastAPI',
        'Python',
        'PostgreSQL',
        'JWT',
        'REST API',
        'JavaScript',
        'CSS'
      ],
      highlights: [
        'JWT-based authentication with protected routes and user sessions.',
        'Role-based admin access for managing movie content through backend APIs.',
        'FastAPI REST backend with movie retrieval and creation endpoints.',
        'Netflix-style interface with dynamic movie rows, hero banner, and responsive UI.',
        'Dedicated watch page connected to the backend movie APIs.',
        'CORS-configured frontend and backend architecture designed for local and future cloud deployment.'
      ],
      githubLink: 'https://github.com/Hitesh1065/Project-n',
    },
    {
      id: 5,
    
      title: 'GymBot',
    
      tagline: 'Automated university gym-slot booking',
    
      category: 'Personal',
    
      description:
        'A browser automation bot that automatically books university gym slots through the G-Sports portal. Built with Python and Selenium, it handles authentication, dynamically generated CAPTCHA content, portal navigation, date selection, facility selection, and target-slot booking.',
    
      technologies: [
        'Python',
        'Selenium',
        'ChromeDriver',
        'Web Automation',
        'Windows Task Scheduler'
      ],
    
      highlights: [
    
        'Automates the complete gym-booking workflow through the university portal.',
    
        'Handles dynamically generated CAPTCHA content from the portal DOM using Selenium.',
    
        'Dynamically selects tomorrow’s date and navigates to the Fitness & Performance Centre.',
    
        'Automates facility and shift selection before attempting to reserve the target gym slot.',
    
        'Uses explicit waits and DOM selectors to interact reliably with dynamically loaded web elements.',
    
        'Configured with Windows Task Scheduler to automatically execute the booking workflow every day at 5:00 PM.'
    
      ],
    
      githubLink: 'https://github.com/Hitesh1065/-web_automation-GymBot',
    
    },
    {
      id: 3,
    
      title: 'Relay',
    
      tagline: 'AI-driven security operations center for smart grids',
    
      category: 'Personal',
    
      featured: true,
    
      description:
        'An AI-driven Security Operations Center for a simulated smart grid that detects, investigates, and responds to false-data-injection attacks in real time. Relay combines telemetry simulation, multiple detection strategies, risk assessment, autonomous SOC agents, trusted-data validation, and a Streamlit dashboard into an end-to-end cyber-physical security pipeline.',
    
      technologies: [
        'Python',
        'AI/ML',
        'Isolation Forest',
        'LiteLLM',
        'Groq',
        'Gemini',
        'Streamlit',
        'Pandas',
        'REST APIs'
      ],
    
      highlights: [
    
        'Simulates smart-grid telemetry and false-data-injection attacks to evaluate cyber-physical security responses.',
    
        'Combines rule-based detection, statistical analysis, Isolation Forest anomaly detection, and physics-based validation.',
    
        'Uses a risk engine and incident manager to classify threats and coordinate automated SOC responses.',
    
        'Implements specialized SOC agents for alert triage, investigation, response, and analyst workflows.',
    
        'Introduces TRUSTED, ESTIMATED, and QUARANTINED data states through a Trusted Data Gateway before downstream optimization.',
    
        'Demonstrates automated containment by quarantining compromised grid data and preventing unsafe dispatch decisions.',
    
        'Includes evaluation scenarios, repeated attack simulations, testing, and deterministic fallback behaviour when an LLM API key is unavailable.'
    
      ],
    
      githubLink: 'https://github.com/Hitesh1065/Relay',
    
    },
    {
      id: 4,
    
      title: 'Qumail',
    
      tagline: 'Quantum-secure email communication platform',
    
      category: 'Personal',
    
      featured: true,
    
      description:
        'A secure email platform exploring quantum-resistant communication by combining modern web technologies with cryptographic techniques. Qumail focuses on protecting email communication through secure encryption, key management, and a user-friendly messaging interface.',
    
      technologies: [
        'Python',
        'FastAPI',
        'React',
        'JavaScript',
        'Cryptography',
        'Quantum-Safe Security',
        'REST APIs',
        'Git'
      ],
    
      highlights: [
    
        'Designed a secure email communication workflow with encrypted message handling.',
    
        'Explored quantum-safe cryptographic concepts and their application to modern email communication.',
    
        'Built a web-based interface for composing, sending, and managing secure messages.',
    
        'Integrated backend APIs to handle communication and cryptographic operations.',
    
        'Focused on secure key handling and protecting sensitive message content throughout the communication flow.',
    
        'Explored how emerging quantum computing threats could influence the design of future secure communication systems.'
    
      ],
    
      githubLink: 'https://github.com/Hitesh1065/Qumail',
    
    },
  ],

  openSource: [
    {
      id: 1,
      repo: 'Q-Health',
      repoUrl: 'https://github.com/Hitesh1065/Q-Health',
      stars: '34k+',
      prNumber: 15510,
      prUrl: 'https://github.com/Hitesh1065/Q-Health',
      title: 'Hybrid quantum-classical machine learning platform',
      area: 'quantum ml',
      description:
        "A research-oriented ML platform combining classical and quantum machine-learning workflows for biomedical prediction, with FastAPI, React, Qiskit, scikit-learn, and model explainability..",
      status: 'Merged',
    },
    {
      id: 2,
      repo: 'Relay',
      repoUrl: 'https://github.com/Hitesh1065/Relay',
      stars: '34k+',
      prNumber: 15538,
      prUrl: 'https://github.com/Hitesh1065/Relay',
      title: 'AI-driven security operations for smart grids',
      area: 'security',
      description:
        "An experimental cyber-physical security platform combining anomaly detection, AI agents, telemetry simulation, and automated threat-response workflows.",
      status: 'Merged',
    },
    {
      id: 3,
      repo: 'Qumail',
      repoUrl: 'https://github.com/Hitesh1065/Qumail',
      stars: '34k+',
      prNumber: 15532,
      prUrl: 'https://github.com/Hitesh1065/Qumail',
      title: 'Quantum-secure email communication',
      area: 'email',
      description:
        'A secure email platform exploring quantum-resistant communication by combining modern web technologies with cryptographic techniques. Qumail focuses on protecting email communication through secure encryption, key management, and a user-friendly messaging interface.',
      status: 'Merged',
    },
  ],
};
