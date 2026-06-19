export const philosophy =
  "Think in systems. Act with precision. Build with intent. Deliver with impact.";

export const focusTags = [
  "Risk Modeling",
  "Financial Systems",
  "Data-Driven Decisions",
  "Efficiency",
  "Systems Thinking",
  "Decision Making",
];

export const opportunityAreas = [
  "Finance",
  "Data Analytics",
  "Risk",
  "Operations",
  "Technology",
  "Financial Services",
  "Business Analytics",
];

export const experiences = [
  {
    company: "M&T Bank",
    role: "SPOC Summer Analyst",
    date: "Summer 2026",
    logo: "/mt.png",
    accent: "green",
    bullets: [
      "Developing compliance reporting systems across 16 monthly workbooks.",
      "Automating dashboards tracking quality, productivity, and servicing metrics.",
      "Standardizing reporting workflows supporting a $10B+ loan servicing portfolio.",
    ],
  },
  {
    company: "City of Buffalo",
    role: "Risk Management Intern",
    date: "Summer 2025",
    logo: "/buffalo.png",
    accent: "blue",
    bullets: [
      "Developed operational frameworks serving 20,000+ residents.",
      "Reduced service processing time from 12 days to 2 days.",
      "Built regression models using census data to analyze community trends.",
    ],
  },
  {
    company: "Bank of America",
    role: "Student Leader Intern",
    date: "Summer 2024",
    logo: "/bofa.png",
    accent: "red",
    bullets: [
      "Built VBA-based tracking systems contributing to a 98% retention rate.",
      "Conducted 13 interviews to assess operational risk and improve reporting.",
      "Supported leadership programming for 70+ participants.",
    ],
  },
  {
    company: "Northland Workforce Training Center",
    role: "Operations & Automation Intern",
    date: "Summer 2023",
    logo: "/northland.png",
    accent: "slate",
    bullets: [
      "Automated workflows reducing manual entry by 40% across a 250+ vehicle fleet database.",
      "Cut processing time from 6 days to 4 days through validation systems.",
      "Improved data accuracy to 95%+ through cross-team collaboration.",
    ],
  },
];

export const leadershipRoles = [
  {
    title: "President",
    organization: "Residence Hall Association",
    context: "Three-year campus leadership role focused on resident advocacy, programming, and community building.",
    proof: "Managed $40,000+ in budget responsibility while supporting initiatives across residential life.",
  },
  {
    title: "Executive Vice President",
    organization: "Alpha Kappa Psi, Delta Tau Chapter",
    context: "Supports chapter operations, professional development, and peer leadership within a business fraternity.",
    proof: "Bridges finance, service, and professional growth through structured campus leadership.",
  },
  {
    title: "Resident Assistant",
    organization: "Canisius University",
    context: "Builds community, supports student wellbeing, and helps residents navigate academic and campus life.",
    proof: "Strengthens communication, accountability, and service-oriented problem solving.",
  },
  {
    title: "Teaching Assistant",
    organization: "Macroeconomics & Microeconomics",
    context: "Supports students learning core economic concepts, course material, and analytical reasoning.",
    proof: "Reinforces technical communication and the ability to explain complex ideas clearly.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "SQL", "Excel", "VBA", "JavaScript", "AWS", "LaTeX"],
  },
  {
    title: "Frameworks & Tools",
    items: ["FastAPI", "Flask", "Git", "APIs", "Power BI", "Tableau", "IntelliJ", "Boto3"],
  },
  {
    title: "Data & Analysis",
    items: ["Pandas", "NumPy", "Scikit-learn", "Financial Modeling", "KPI Reporting", "Forecasting"],
  },
];

export const proofMetrics = [
  { label: "Internships", value: "3+", detail: "Banking, public sector, and operations" },
  { label: "Residents Impacted", value: "20,000+", detail: "Operational frameworks for public service" },
  { label: "Efficiency Improvement", value: "75%", detail: "Measured process and workflow gains" },
  { label: "Technical Projects", value: "6+", detail: "Finance, risk, data, and backend systems" },
  { label: "Budget Managed", value: "$40,000+", detail: "Campus leadership and program execution" },
];

export const proofHighlights = [
  "Built regression models using census data",
  "Reduced service processing time by 80%",
  "Automated workflows across 250+ records",
  "Led initiatives impacting 70+ participants",
  "Developed real-time risk monitoring systems",
  "Improved data accuracy to 95%+",
];

export const projects = [
  {
    title: "Credit Risk Mini-Model",
    image: "/credit-risk.png",
    featured: true,
    tags: ["Python", "FastAPI", "Machine Learning"],
    description:
      "Developed a logistic regression model to predict credit risk and deployed it with FastAPI for real-time predictions.",
    impact: "Shows applied financial modeling, API design, and decision support.",
    proof: [
      "Modeled borrower risk with interpretable classification logic.",
      "Exposed predictions through an API-ready backend workflow.",
      "Connects machine learning output to practical credit decisioning.",
    ],
    github: "https://github.com/abujallow/credit-risk-mini",
  },
  {
    title: "Risk Monitoring System",
    image: "/risk-monitoring.png",
    featured: false,
    tags: ["Python", "Data Analysis"],
    description:
      "Built a volatility monitoring system that tracks market conditions and triggers alerts from predefined risk thresholds.",
    impact: "Connects market analytics with practical operational risk monitoring.",
    proof: [
      "Tracks market movement against defined risk conditions.",
      "Turns volatility signals into actionable monitoring alerts.",
      "Reflects risk awareness beyond static reporting.",
    ],
    github: "https://github.com/abujallow/risk-monitoring-system",
  },
  {
    title: "Market Dashboard",
    image: "/market-dashboard.png",
    featured: false,
    tags: ["Python", "Flask", "Data Visualization"],
    description:
      "Built an interactive financial dashboard using Plotly and yFinance to visualize market trends and investment signals.",
    impact: "Demonstrates data storytelling and dashboard delivery for finance workflows.",
    proof: [
      "Uses market data to support fast visual interpretation.",
      "Highlights dashboard thinking for repeated analysis workflows.",
      "Balances technical implementation with decision-friendly presentation.",
    ],
    github: "https://github.com/abujallow/market-dashboard",
  },
  {
    title: "Banking Logging System",
    image: "/banking-logging.png",
    featured: false,
    tags: ["Java", "Logging", "File Handling"],
    description:
      "Designed a Java application with structured logging, file handling, and configurable levels for transaction monitoring.",
    impact: "Highlights backend fundamentals and operational reliability thinking.",
    proof: [
      "Applies structured logging concepts to banking-style operations.",
      "Uses configurable levels for cleaner monitoring and debugging.",
      "Shows attention to auditability, reliability, and maintainability.",
    ],
    github: "https://github.com/abujallow/banking-logging-java",
  },
  {
    title: "Java Data Analyzer",
    image: "/java-data-analyzer.png",
    featured: false,
    tags: ["Java", "JavaFX", "Statistics"],
    description:
      "Built a JavaFX desktop app that processes numeric files, calculates statistics, and exports results using backend logic.",
    impact: "Shows applied software design, analysis, and user-facing tooling.",
    proof: [
      "Processes external data files through a simple desktop interface.",
      "Calculates statistical summaries for quick analysis.",
      "Demonstrates practical Java, UI, and file-handling experience.",
    ],
    github: "https://github.com/abujallow/java-data-analyzer",
  },
  {
    title: "Probability Simulation Engine",
    image: "/probability-simulation.png",
    featured: false,
    tags: ["Java", "Simulation", "Probability"],
    description:
      "Built a Java application that simulates randomized card hands, tracks combinations, and exports probability results.",
    impact: "Demonstrates simulation design and quantitative reasoning.",
    proof: [
      "Runs repeated randomized trials to estimate probability behavior.",
      "Tracks unique combinations and coverage progress over time.",
      "Connects programming fundamentals with quantitative modeling.",
    ],
    github: "https://github.com/abujallow/probability-simulation-engine",
  },
];
