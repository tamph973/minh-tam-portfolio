
import { Project, SkillCategory, SystemPrinciple } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Microservices E-commerce',
    description: 'A distributed order processing system handling high-concurrency transactions. Implements inventory locking and consistent payments via microservices.',
    tags: ['NodeJS', 'Express', 'PostgreSQL', 'Redis'],
    icon: 'shopping_cart_checkout',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    description: 'Fullstack dashboard visualizing large datasets. Uses WebSockets for live data updates and optimized MongoDB aggregation pipelines for reporting.',
    tags: ['React', 'NodeJS', 'MongoDB', 'Socket.io'],
    icon: 'analytics',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'AuthN / AuthZ Service',
    description: 'Centralized identity management system with OAuth2 and JWT. Features role-based access control and containerized deployment.',
    tags: ['NodeJS', 'JWT', 'TypeScript', 'Docker'],
    icon: 'lock_person',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    icon: 'dns',
    colorClass: 'text-primary bg-blue-100',
    items: [
      { label: 'Node.js / Express', description: 'Event-driven Architecture' },
      { label: 'Microservices', description: 'gRPC, Message Queues' },
      { label: 'REST & GraphQL', description: 'API Design Standards' },
      { label: 'Python / Django', description: 'Rapid Development' }
    ]
  },
  {
    title: 'Databases & Data Layer',
    icon: 'database',
    colorClass: 'text-green-600 bg-green-100',
    items: [
      { label: 'PostgreSQL', description: 'Complex Queries, ACID' },
      { label: 'Redis', description: 'Caching & Pub/Sub Performance' },
      { label: 'MongoDB', description: 'Scalable Document Store' },
      { label: 'Data Integrity', description: 'Migrations, Normalization' }
    ]
  },
  {
    title: 'Frontend',
    icon: 'web',
    colorClass: 'text-purple-600 bg-purple-100',
    items: [
      { label: 'React / Next.js', description: 'SSR, Server Components' },
      { label: 'TypeScript', description: 'Strict Type Safety' },
      { label: 'Tailwind CSS', description: 'Responsive UI Design' },
      { label: 'State Management', description: 'Redux, Zustand' }
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: 'build',
    colorClass: 'text-orange-600 bg-orange-100',
    items: [
      { label: 'Docker & K8s', description: 'Containerization' },
      { label: 'AWS Services', description: 'EC2, S3, Lambda, RDS' },
      { label: 'CI/CD Pipelines', description: 'GitHub Actions' },
      { label: 'Linux & Bash', description: 'Scripting & Automation' }
    ]
  }
];

export const SYSTEM_PRINCIPLES: SystemPrinciple[] = [
  {
    title: 'Security',
    description: 'Implementing robust AuthN/AuthZ, OWASP best practices, and data encryption to protect user integrity.',
    icon: 'security'
  },
  {
    title: 'Performance',
    description: 'Optimizing DB queries, implementing caching strategies (Redis), and reducing latency for high-load systems.',
    icon: 'speed'
  },
  {
    title: 'Clean Architecture',
    description: 'Writing modular, testable code using SOLID principles to ensure long-term maintainability.',
    icon: 'architecture'
  },
  {
    title: 'Scalability',
    description: 'Designing stateless APIs and horizontal scaling strategies to handle growth effortlessly.',
    icon: 'cloud'
  }
];
