import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  LucideIcon, 
  Terminal,
  Container,
  GitBranch,
  CreditCard,
  Mail,
  Search,
  Lock
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: "API & Microservices" | "System Design" | "Cloud & DevOps" | "AI & Integration";
  thumbnail: string;
  description: string;
  tags: string[];
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    backendFeatures: string[];
    techStack: string[];
    outcome: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    icon: LucideIcon;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Enterprise E-Commerce Core",
    category: "API & Microservices",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9caa052d-5c2d-4319-9d5b-c4b8bc9b3384/project-saas-dashboard-6e872ae0-1779748577781.webp",
    description: "Highly scalable microservices architecture for a multi-tenant e-commerce platform handling 50k+ RPM.",
    tags: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "RabbitMQ"],
    caseStudy: {
      problem: "Legacy monolithic system was failing under peak traffic and lacked modularity for new features.",
      solution: "Decomposed the monolith into domain-driven microservices with an API Gateway and Event Bus.",
      architecture: "Clean Architecture with Domain-Driven Design (DDD). Services communicate via gRPC for internal calls and RabbitMQ for async events.",
      backendFeatures: [
        "Distributed Caching (Redis)",
        "Event-Driven Communication",
        "Payment Gateway Integration (Stripe)",
        "Background Job Processing (BullMQ)",
        "Rate Limiting & Circuit Breakers"
      ],
      techStack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
      outcome: "System uptime increased to 99.99% and checkout processing time reduced by 400ms."
    }
  },
  {
    id: "2",
    title: "Real-time Fintech Settlement Engine",
    category: "System Design",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9caa052d-5c2d-4319-9d5b-c4b8bc9b3384/project-fintech-app-fe138710-1779748577517.webp",
    description: "Transaction processing engine with high consistency and auditability for cross-border payments.",
    tags: ["Go", "Kafka", "MongoDB", "Kubernetes"],
    caseStudy: {
      problem: "Inconsistent transaction states during network failures leading to financial discrepancies.",
      solution: "Implemented an Event Sourcing pattern with Saga orchestration to ensure eventual consistency.",
      architecture: "Layered Architecture with Event Sourcing and CQRS. Orchestration via Temporal.io.",
      backendFeatures: [
        "Idempotent API Design",
        "Transaction Auditing",
        "Multi-currency support",
        "Automated Reconciliation",
        "Unit & Integration Testing (90% coverage)"
      ],
      techStack: ["Go", "Kafka", "MongoDB", "Temporal", "Docker", "Kubernetes"],
      outcome: "Zero financial discrepancies over 12 months of operation; audit time reduced from days to minutes."
    }
  },
  {
    id: "3",
    title: "Cloud-Native Media Pipeline",
    category: "Cloud & DevOps",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9caa052d-5c2d-4319-9d5b-c4b8bc9b3384/project-furniture-store-90376fff-1779748576608.webp",
    description: "Automated media processing pipeline with on-demand scaling and cloud storage integration.",
    tags: ["Python", "AWS Lambda", "S3", "Terraform"],
    caseStudy: {
      problem: "Manual and slow video transcoding process that couldn't handle variable workloads.",
      solution: "Built a serverless pipeline that triggers on S3 uploads, utilizing AWS Batch and Lambda.",
      architecture: "Serverless Microservices. Infrastructure as Code (IaC) via Terraform.",
      backendFeatures: [
        "Auto-scaling Media Transcoding",
        "CDN Invalidation (CloudFront)",
        "Secure Cloud Storage (S3)",
        "CI/CD Pipeline (GitHub Actions)",
        "Media Metadata Extraction"
      ],
      techStack: ["Python", "FFmpeg", "AWS Batch", "Lambda", "S3", "Terraform", "GitHub Actions"],
      outcome: "Reduced media processing costs by 65% while increasing throughput by 10x."
    }
  },
  {
    id: "4",
    title: "AI-Powered Threat Detection",
    category: "AI & Integration",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9caa052d-5c2d-4319-9d5b-c4b8bc9b3384/project-cyber-security-4d3b8a07-1779748577210.webp",
    description: "Backend API for real-time security logs analysis using machine learning models.",
    tags: ["Python", "FastAPI", "Elasticsearch", "PyTorch"],
    caseStudy: {
      problem: "Traditional rule-based systems were missing sophisticated zero-day attacks.",
      solution: "Developed a FastAPI service that streams logs from Elasticsearch into a PyTorch model for anomaly detection.",
      architecture: "MVC Architecture for the API layer with a decoupled Worker layer for model inference.",
      backendFeatures: [
        "Real-time Data Streaming",
        "AI Model Serving",
        "Logging & Monitoring (ELK Stack)",
        "JWT Authentication & RBAC",
        "Database Index Optimization"
      ],
      techStack: ["Python", "FastAPI", "Elasticsearch", "PyTorch", "Celery", "Redis"],
      outcome: "Identified 30% more legitimate threats than the previous rule-based system."
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Core",
    skills: [
      { name: "Node.js / TypeScript", level: 95, icon: Server },
      { name: "Go (Golang)", level: 85, icon: Terminal },
      { name: "Python / Django / FastAPI", level: 90, icon: Code },
      { name: "Clean & Layered Architecture", level: 95, icon: Layers },
      { name: "API Design (REST, GraphQL, gRPC)", level: 95, icon: Cpu }
    ]
  },
  {
    title: "Database & Caching",
    skills: [
      { name: "PostgreSQL / MySQL", level: 90, icon: Database },
      { name: "MongoDB / NoSQL", level: 85, icon: Database },
      { name: "Redis / Memcached", level: 90, icon: Zap },
      { name: "Elasticsearch", level: 80, icon: Search },
      { name: "Database Optimization", level: 85, icon: ShieldCheck }
    ]
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker & Kubernetes", level: 85, icon: Container },
      { name: "AWS / GCP / Azure", level: 85, icon: Cloud },
      { name: "CI/CD (GitHub Actions, Jenkins)", level: 90, icon: GitBranch },
      { name: "Terraform (IaC)", level: 80, icon: Cloud },
      { name: "System Monitoring (Prometheus, Grafana)", level: 80, icon: ShieldCheck }
    ]
  },
  {
    title: "Specialized Services",
    skills: [
      { name: "Payment Gateway (Stripe, PayPal)", level: 90, icon: CreditCard },
      { name: "Email Services (SendGrid, Mailgun)", level: 90, icon: Mail },
      { name: "Unit & Integration Testing (Jest, PyTest)", level: 95, icon: ShieldCheck },
      { name: "Cloud Storage (S3, Cloudinary)", level: 90, icon: Database },
      { name: "AI Integration (OpenAI, LangChain)", level: 85, icon: Cpu }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO at TechFlow",
    content: "An exceptional backend architect. The settlement engine they built for us has processed millions of transactions without a single discrepancy.",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9caa052d-5c2d-4319-9d5b-c4b8bc9b3384/testimonial-user-1-b4dca25a-1779748577607.webp"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Engineering Manager at InnovateX",
    content: "Their expertise in Clean Architecture and Microservices transformed our legacy mess into a scalable, testable, and maintainable platform.",
    avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9caa052d-5c2d-4319-9d5b-c4b8bc9b3384/testimonial-user-2-12e8ee97-1779748577703.webp"
  }
];

export const awards: Award[] = [
  { id: "1", title: "Backend Innovation Award", issuer: "CloudNative Foundation", year: "2023" },
  { id: "2", title: "Open Source Contributor of the Year", issuer: "GitHub Universe", year: "2022" },
  { id: "3", title: "Certified AWS Solutions Architect", issuer: "Amazon Web Services", year: "2021" }
];