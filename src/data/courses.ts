
export interface Course {
  id: string;
  name: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  instructor: string;
  specialty: string[];
  description: string;
  syllabus: string;
  prerequisites: string[];
  certification: string | null;
  price: number;
  image: string;
  gallery: string[];
  courseNotes?: string;
  isAccredited: boolean;
  includesLabs: boolean;
  includesSupport: boolean;
  dateAdded: string;
}

export const courses: Course[] = [
  {
    id: "ethical-hacking",
    name: "Ethical Hacking Fundamentals",
    duration: "8 weeks",
    level: "Beginner",
    instructor: "Alex Rodriguez",
    specialty: ["Penetration Testing", "Vulnerability Assessment", "Network Security"],
    description: "Learn the fundamentals of ethical hacking and penetration testing. This comprehensive course covers the methodologies and tools used by security professionals to identify and exploit vulnerabilities in systems.",
    syllabus: "Starting with basic networking concepts, you'll progress through reconnaissance techniques, vulnerability scanning, exploitation methods, and reporting. Perfect for beginners looking to enter the cybersecurity field.",
    prerequisites: ["Basic computer knowledge", "Understanding of networking concepts"],
    certification: "Certified Ethical Hacker (CEH) Preparation",
    price: 299,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop"
    ],
    isAccredited: true,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2024-01-15"
  },
  {
    id: "network-security",
    name: "Advanced Network Security",
    duration: "12 weeks",
    level: "Advanced",
    instructor: "Sarah Chen",
    specialty: ["Firewall Management", "IDS/IPS", "Network Monitoring"],
    description: "Master advanced network security concepts including firewall configuration, intrusion detection systems, and network monitoring. This course is designed for experienced IT professionals.",
    syllabus: "Deep dive into network architecture security, advanced firewall rules, IDS/IPS deployment, network forensics, and incident response. Includes hands-on labs with enterprise-grade tools.",
    prerequisites: ["Network+ certification", "3+ years IT experience", "Basic security knowledge"],
    certification: "Cisco Certified Network Professional Security (CCNP Security) Preparation",
    price: 599,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&h=600&fit=crop"
    ],
    courseNotes: "Requires access to virtual lab environment - included in course fee",
    isAccredited: true,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2024-02-03"
  },
  {
    id: "incident-response",
    name: "Cybersecurity Incident Response",
    duration: "6 weeks",
    level: "Intermediate",
    instructor: "Marcus Thompson",
    specialty: ["Incident Handling", "Digital Forensics", "Crisis Management"],
    description: "Learn how to effectively respond to cybersecurity incidents. This course covers the entire incident response lifecycle from preparation to post-incident analysis.",
    syllabus: "Comprehensive coverage of incident response frameworks, evidence collection, malware analysis, communication strategies, and recovery procedures. Real-world case studies included.",
    prerequisites: ["Basic cybersecurity knowledge", "Understanding of operating systems"],
    certification: "Certified Computer Security Incident Handler (CSIH)",
    price: 449,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    ],
    isAccredited: true,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2024-03-10"
  },
  {
    id: "cloud-security",
    name: "Cloud Security Architecture",
    duration: "10 weeks",
    level: "Advanced",
    instructor: "Dr. Jennifer Walsh",
    specialty: ["AWS Security", "Azure Security", "Cloud Compliance"],
    description: "Master cloud security across major platforms including AWS, Azure, and Google Cloud. Learn to design secure cloud architectures and implement best practices.",
    syllabus: "Cloud security fundamentals, identity and access management, data protection, compliance frameworks, security monitoring, and incident response in cloud environments.",
    prerequisites: ["Cloud platform experience", "Security+ certification", "Infrastructure knowledge"],
    certification: "Certified Cloud Security Professional (CCSP)",
    price: 699,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    ],
    isAccredited: true,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2024-01-28"
  },
  {
    id: "malware-analysis",
    name: "Malware Analysis & Reverse Engineering",
    duration: "14 weeks",
    level: "Expert",
    instructor: "Dr. Robert Kim",
    specialty: ["Reverse Engineering", "Static Analysis", "Dynamic Analysis"],
    description: "Advanced course in malware analysis and reverse engineering. Learn to dissect malware, understand attack vectors, and develop countermeasures.",
    syllabus: "Static and dynamic analysis techniques, assembly language, debugger usage, sandbox environments, threat intelligence, and malware family classification.",
    prerequisites: ["Programming experience", "Assembly language basics", "Advanced security knowledge"],
    certification: "GIAC Reverse Engineering Malware (GREM)",
    price: 899,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    ],
    courseNotes: "Includes specialized analysis tools and isolated lab environment",
    isAccredited: true,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2023-12-05"
  },
  {
    id: "security-basics",
    name: "Cybersecurity Fundamentals",
    duration: "4 weeks",
    level: "Beginner",
    instructor: "Lisa Martinez",
    specialty: ["Security Awareness", "Risk Management", "Compliance"],
    description: "Perfect introduction to cybersecurity for beginners. Learn essential security concepts, common threats, and basic protection strategies.",
    syllabus: "Security principles, threat landscape, password management, social engineering awareness, basic encryption, and security policies. Ideal for career changers.",
    prerequisites: [],
    certification: "CompTIA Security+ Preparation",
    price: 199,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop"
    ],
    isAccredited: true,
    includesLabs: false,
    includesSupport: true,
    dateAdded: "2024-04-01"
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics Investigation",
    duration: "16 weeks",
    level: "Advanced",
    instructor: "Captain James Wilson",
    specialty: ["Computer Forensics", "Mobile Forensics", "Network Forensics"],
    description: "Comprehensive digital forensics course covering investigation techniques, evidence handling, and legal procedures. Taught by a former law enforcement investigator.",
    syllabus: "Forensic methodology, evidence acquisition, file system analysis, network traffic analysis, mobile device forensics, and expert testimony preparation.",
    prerequisites: ["IT background", "Understanding of legal procedures", "Basic programming"],
    certification: "Certified Computer Hacking Forensic Investigator (CHFI)",
    price: 799,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
    ],
    courseNotes: "Includes forensic software licenses and case study materials",
    isAccredited: true,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2024-02-20"
  },
  {
    id: "web-security",
    name: "Web Application Security",
    duration: "8 weeks",
    level: "Intermediate",
    instructor: "Emma Thompson",
    specialty: ["OWASP Top 10", "Secure Coding", "Application Testing"],
    description: "Focus on web application security including common vulnerabilities, secure coding practices, and security testing methodologies.",
    syllabus: "OWASP Top 10 vulnerabilities, SQL injection, XSS attacks, authentication flaws, secure development lifecycle, and automated security testing tools.",
    prerequisites: ["Web development experience", "Basic security knowledge"],
    certification: null,
    price: 399,
    image: "https://images.unsplash.com/photo-1550645612-83f5d594b671?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550645612-83f5d594b671?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=800&h=600&fit=crop"
    ],
    isAccredited: false,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2024-03-22"
  },
  {
    id: "cryptography",
    name: "Applied Cryptography",
    duration: "12 weeks",
    level: "Advanced",
    instructor: "Dr. Ahmed Hassan",
    specialty: ["Encryption", "PKI", "Blockchain Security"],
    description: "Deep dive into cryptographic principles and their practical applications. Learn encryption algorithms, key management, and implementation best practices.",
    syllabus: "Symmetric and asymmetric encryption, hash functions, digital signatures, PKI implementation, cryptographic protocols, and emerging technologies like quantum cryptography.",
    prerequisites: ["Mathematics background", "Programming experience", "Advanced security knowledge"],
    certification: "Certified Encryption Specialist (CES)",
    price: 749,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    ],
    isAccredited: true,
    includesLabs: true,
    includesSupport: true,
    dateAdded: "2024-01-08"
  },
  {
    id: "governance-compliance",
    name: "Security Governance & Compliance",
    duration: "6 weeks",
    level: "Intermediate",
    instructor: "Patricia Davis",
    specialty: ["Risk Management", "Audit", "Policy Development"],
    description: "Learn to develop and implement security governance frameworks, manage compliance requirements, and conduct security audits.",
    syllabus: "Security frameworks (ISO 27001, NIST), risk assessment methodologies, policy development, compliance management, audit procedures, and governance structures.",
    prerequisites: ["Management experience", "Basic security knowledge"],
    certification: "Certified Information Security Manager (CISM) Preparation",
    price: 549,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    ],
    isAccredited: true,
    includesLabs: false,
    includesSupport: true,
    dateAdded: "2024-02-15"
  }
];
