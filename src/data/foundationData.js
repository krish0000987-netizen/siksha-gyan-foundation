// SHIKSHA GYAN FOUNDATION - Master Data File with Official Logo and Clean Entity Structures

export const FOUNDATION_INFO = {
  name: "SHIKSHA GYAN FOUNDATION",
  shortName: "Shiksha Gyan",
  type: "Not-for-Profit Education Society & Trust",
  estYear: 2020,
  tagline: "Empowering Underprivileged India Through Education, Skills & Vision",
  mandate: ["Unreached", "Uncared", "Unattended"],
  beneficiaryAgeRange: "6 to 60 Years",
  website: "www.shikshagyanfoundation.org",
  email: "nitin@shikshagyanfoundation.org",
  phones: ["8291373187", "7021475595", "9549411349"],
  address: {
    line1: "1/7 Hanuman Prasad Society",
    street: "Mahatma Phule Road, Garibacha Wada",
    location: "Dombivli (W), Thane",
    pincode: "421202",
    state: "Maharashtra, India"
  },
  registration: {
    society: {
      number: "MHA/521/2020",
      date: "10-12-2020",
      type: "Societies Registration Act, 1860"
    },
    trust: {
      number: "F43060",
      date: "18-11-2021",
      type: "Bombay Public Trusts Act, 1950"
    }
  },
  bankDetails: {
    bankName: "Pending Updates (Placeholder)",
    branchAddress: "Dombivli West Branch, Thane",
    accountNumber: "To be announced",
    ifscCode: "To be announced",
    micrCode: "To be announced"
  }
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Reaching the Unreached, Uncared & Unattended",
    subtitle: "Empowering underprivileged children and youth with high-quality education and lifelong learning opportunities across Maharashtra.",
    image: "/images/hero_child_education.jpg",
    badge: "Core Mission",
    ctaText: "Donate for Child Education",
    ctaTarget: "donate"
  },
  {
    id: 2,
    title: "Competitive Examination Center",
    subtitle: "Structured 6-step mentoring for UPSC, MPSC, NDA, CDS, AFCAT, CAPF, PSI, STI & ASO examinations by veteran guidance faculty.",
    image: "/images/hero_competitive_prep.jpg",
    badge: "Government & Defence Careers",
    ctaText: "Explore Competitive Coaching",
    ctaTarget: "programs-competitive"
  },
  {
    id: 3,
    title: "Design, Architecture & Creative Careers",
    subtitle: "Guiding creative aspirants through aptitude testing & entrance coaching for NID, NIFT, UCEED, NATA, CEED & ART CET.",
    image: "/images/hero_design_studio.jpg",
    badge: "Creative Excellence",
    ctaText: "Try Aptitude Quiz",
    ctaTarget: "programs-design"
  },
  {
    id: 4,
    title: "Skill Development & Vocational Training",
    subtitle: "Urban and rural skilling centers offering placement-aligned courses in Hospitality, Aviation, Healthcare, Automobile & Safety.",
    image: "/images/hero_skill_workshop.jpg",
    badge: "Employability & Jobs",
    ctaText: "View Vocational Courses",
    ctaTarget: "programs-skills"
  },
  {
    id: 5,
    title: "Community Welfare & Health Drives",
    subtitle: "Blood donation, eye checkups & health wellness camps in Dombivli, Kalyan, Thane and Dadar for sustainable grassroots impact.",
    image: "/images/hero_health_camp.jpg",
    badge: "Grassroots Welfare",
    ctaText: "View Health Camps",
    ctaTarget: "activities-health"
  }
];

export const GOVERNING_BODY = [
  { 
    name: "Mr. Sachin More", 
    role: "President", 
    highlight: "Visionary Leader & Education Catalyst"
  },
  { 
    name: "Mr. Nitin More", 
    role: "Secretary", 
    highlight: "Strategic Initiatives & CSR Partnerships Head"
  },
  { 
    name: "Miss. Sharayu Gangurde", 
    role: "Treasurer", 
    highlight: "Financial Stewardship & Compliance Officer"
  },
  { 
    name: "Mr. Pravin Gudekar", 
    role: "Governing Member", 
    highlight: "Community Outreach & Project Director"
  },
  { 
    name: "Mr. Sudhir Bhosale", 
    role: "Governing Member", 
    highlight: "Vocational & Skill Center Strategist"
  },
  { 
    name: "Mr. Ajay Waingankar", 
    role: "Governing Member", 
    highlight: "Academic & Competitive Exam Mentor"
  },
  { 
    name: "Mrs. Tanushka More", 
    role: "Governing Member", 
    highlight: "Girls' Education & Welfare Advocate"
  }
];

export const FACULTY_MEMBERS = [
  {
    name: "Mr. Mandar Rawool",
    specialization: "UPSC, MPSC, PSI, STI, ASO, AFCAT, CAPF Guidance",
    role: "Senior Competitive Exam Chief Mentor",
    category: "Competitive Exams"
  },
  {
    name: "Mr. Rajkumar Mone",
    specialization: "NDA, CDS, NA & Defence Entrance Strategy",
    role: "Defence Services Guidance Specialist",
    category: "Defence Exams"
  },
  {
    name: "Mr. Akshay Jagtap",
    specialization: "Kalyan Center Academic Operations & Career Counseling",
    role: "Branch Director & Career Counselor",
    category: "Branch Leadership"
  },
  {
    name: "Mr. Baijulal Gupta",
    specialization: "Foundational & Entrance Science Mathematics",
    role: "Senior Academic Faculty",
    category: "Academic Entrance"
  },
  {
    name: "Mr. Sachin More",
    specialization: "Institutional Partnerships & Skill Skilling Directorship",
    role: "President & Strategic Mentor",
    category: "Leadership & Skilling"
  },
  {
    name: "Mrs. Laxmi Dubey",
    specialization: "Girls' Career Guidance & General Aptitude Training",
    role: "Senior Counselor & Girls' Empower Mentor",
    category: "Girls Education"
  }
];

export const PROGRAM_CATEGORIES = [
  {
    id: "education",
    title: "Education & Child Welfare",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    description: "Holistic education from foundational stage to higher studies, ensuring every child and learner aged 6 to 60 gets equitable access.",
    subitems: [
      { name: "Child Education Initiative", link: "child-education" },
      { name: "Foundational Learning Journey", link: "foundational-education" },
      { name: "School & College Collaborations", link: "school-college" },
      { name: "Girls' Education & Career Support", link: "girls-education" }
    ]
  },
  {
    id: "competitive",
    title: "Competitive Examination Center",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    description: "Structured preparation for civil services and defence forces combining strategy, study material, writing skills and personal mentoring.",
    subitems: [
      { name: "National Exams (UPSC, NDA, CDS, AFCAT, CAPF)", link: "competitive-national" },
      { name: "Maharashtra State Exams (MPSC, PSI, STI, ASO)", link: "competitive-mpsc" },
      { name: "Defence Exam Guidance (NDA / CDS / NA)", link: "competitive-defence" }
    ]
  },
  {
    id: "entrance",
    title: "Academic & Design Entrance Exams",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
    description: "11th/12th Science & Commerce stream guidance alongside specialized entrance coaching for Engineering, Medical & Creative Careers.",
    subitems: [
      { name: "Academic Entrance (JEE Main/Adv, NEET, MHT-CET)", link: "entrance-academic" },
      { name: "Design & Creative Careers (NID, NIFT, UCEED, NATA)", link: "entrance-design" },
      { name: "3-Step Aptitude & College Admission Guidance", link: "design-aptitude" }
    ]
  },
  {
    id: "skills",
    title: "Skill Development & Vocational Training",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "Market-aligned skill centers in urban and rural centers giving underprivileged youth direct pathways to employment and placement support.",
    subitems: [
      { name: "Hospitality & Aviation Skills", link: "skills-vocational" },
      { name: "Healthcare & Automobile Skilling", link: "skills-vocational" },
      { name: "Fire & Safety + Diet & Nutrition Certificate", link: "skills-vocational" }
    ]
  },
  {
    id: "community",
    title: "Community & Literacy Programs",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
    description: "Bridging the digital divide and enhancing financial independence alongside health wellness drives.",
    subitems: [
      { name: "Digital & Financial Literacy Drives", link: "digital-financial-literacy" },
      { name: "Health Camps & Blood Donation Drives", link: "activities-health" },
      { name: "NGO Partnerships & Capacity Building", link: "csr-ngo-partnerships" }
    ]
  }
];

export const COMPETITIVE_STRATEGY_STEPS = [
  { step: 1, title: "Time-Bound Study Strategy", desc: "Structured timeline tailored to individual exam syllabus and target examination date." },
  { step: 2, title: "Curated Study Compilation", desc: "Crisp, updated subject notes and standard reference books curated by expert faculty." },
  { step: 3, title: "Revision Planning", desc: "Multiple scheduled revision cycles to embed facts, concepts, and current affairs deeply." },
  { step: 4, title: "In-Depth Analysis & Tests", desc: "Regular sectional tests and full-length mock exams with performance metrics." },
  { step: 5, title: "Writing & Analytical Skills", desc: "Dedicated answer writing sessions for UPSC/MPSC Mains with individual feedback." },
  { step: 6, title: "Personal Counselling & Mentoring", desc: "1-on-1 strategy sessions with Mr. Mandar Rawool & Mr. Rajkumar Mone." }
];

export const DESIGN_THREE_STEP_MODEL = [
  {
    step: "Step 01",
    title: "Aptitude Test & Career Guidance",
    description: "We evaluate the student's spatial awareness, creative instinct, visual thinking and problem-solving skills to recommend ideal creative disciplines."
  },
  {
    step: "Step 02",
    title: "Entrance Examination Coaching",
    description: "Rigorous coaching for NID, NIFT, UCEED, NATA, CEED, JEE Paper 2 & ART CET covering studio test, DAT, drawing & speed math."
  },
  {
    step: "Step 03",
    title: "Personal College Admission Guidance",
    description: "Hands-on counseling for portfolio creation, college selection, preference filling and interview preparation for top Indian and global universities."
  }
];

export const JOB_FAIRS = [
  { 
    title: "Thane District Employment Exchange Organization Job Fair", 
    location: "Thane", 
    outcome: "Over 400+ Youth Connected to Corporate Hiring",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80"
  },
  { 
    title: "Panvel Municipal Corporation Organization Job Fair", 
    location: "Panvel", 
    outcome: "Vocational Trainees Interviewed by Hospitality & Healthcare Firms",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80"
  },
  { 
    title: "Mira Bhayandar Municipal Corporation Job Fair", 
    location: "Mira-Bhayandar", 
    outcome: "Direct Placement Drives for Skill Center Graduates",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80"
  },
  { 
    title: "Vasai-Virar Municipal Corporation Job Fair", 
    location: "Vasai-Virar", 
    outcome: "Regional Youth Career & Job Counseling Sessions",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80"
  },
  { 
    title: "Dr. Babasaheb Ambedkar Research & Training Institute (BARTI) Job Fair", 
    location: "Maharashtra State", 
    outcome: "Specialized Career & Employment Empowerment",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80"
  }
];

export const HISTORICAL_SEMINARS = [
  { 
    venue: "Thane Police Commissioner Hall (Police Welfare Assoc.)", 
    year: "2023", 
    focus: "NDA/CDS Defence Career Awareness & Guidance",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80"
  },
  { 
    venue: "Parel BEST Employee Colony", 
    year: "2022", 
    focus: "Youth Career Guidance & Competitive Exam Strategy",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80"
  },
  { 
    venue: "Sakal Newspaper Seminar at Sterling College, Nerul", 
    year: "2015", 
    focus: "10th & 12th Career Horizons & Entrance Exams",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80"
  },
  { 
    venue: "Loksatta Yashacha Marg, Thane", 
    year: "2014", 
    focus: "Public Educational Awareness & Career Options",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80"
  },
  { 
    venue: "Mulund District Collector Library Book Exhibition", 
    year: "2013", 
    focus: "Book Fair & Academic Resource Distribution",
    image: "https://images.unsplash.com/photo-1507842229450-48b4e7239023?auto=format&fit=crop&w=500&q=80"
  },
  { 
    venue: "Tip-Top Plaza Check Naka Educational Conferences", 
    year: "2012-2021", 
    focus: "Annual Career Seminars & Academic Counseling",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=500&q=80"
  }
];

export const HEALTH_CAMPS = [
  { 
    title: "Community Blood Donation Drive", 
    locations: ["Kalyan", "Dombivli"], 
    detail: "Organized in association with local blood banks to assist emergency requirements.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=500&q=80"
  },
  { 
    title: "Eye Check-up & Vision Care Camp", 
    locations: ["Dombivli", "Thane"], 
    detail: "Free eye checkups, spectacle distribution and cataract screening for seniors.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80"
  },
  { 
    title: "General Health & Wellness Camp", 
    locations: ["Kalyan", "Dombivli", "Thane", "Dadar"], 
    detail: "Comprehensive physical checkup, doctor consultation, BP/sugar tests.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=500&q=80"
  }
];

export const CORE_VALUES = [
  { name: "Customer Centricity", desc: "Students, youth, and corporate partners are our key stakeholders. Their growth and welfare direct our efforts." },
  { name: "Commitment", desc: "We uphold utmost dedication in fulfilling promises, operating with integrity and leading by personal example." },
  { name: "Partnerships", desc: "Collaborations are platforms for mutual empowerment, extending growth opportunities to team members and community." },
  { name: "Entrepreneurial Mindset", desc: "We foster grassroots innovation, encouraging team members to solve social and educational challenges." },
  { name: "Risk Taking", desc: "We recognize and support team members who take calculated risks to explore new educational pathways." },
  { name: "Alumni Network", desc: "We build enduring, lifelong relationships with our alumni rather than treating engagement as a one-time interaction." }
];
