import {
	Project,
	SkillCategory,
	SystemPrinciple,
	ArchitectureFlow,
} from './types';

export const PROJECTS: Project[] = [
	{
		id: '1',
		title: 'Microservice Spring Boot',
		description:
			'Microservice-based full-stack e-commerce platform for a phone shop using Spring Cloud, Postgres, and Kafka.',
		backendHighlights: [
			'Designed API Gateway, Config Server, and Eureka Discovery Server for routing and service registry',
			'Implemented 5 domain microservices (product, customer, order, payment, notification) communicating asynchronously via Kafka',
			'Utilized Keycloak for identity management and Zipkin for distributed request tracing',
			'Containerized entire infrastructure with Docker Compose including PostgreSQL, MongoDB, and Zookeeper',
		],
		tags: [
			'Java',
			'Spring Boot',
			'Spring Cloud',
			'Kafka',
			'Keycloak',
			'Docker',
		],
		icon: 'account_tree',
		repoUrl: 'https://github.com/tamph973/microservice-springboot',
	},
	{
		id: '2',
		title: 'DDD Train Ticket Booking',
		description:
			'A train ticket booking system built with Spring Boot, structured around Domain-Driven Design (DDD) principles.',
		backendHighlights: [
			'Structured application into domain, infrastructure, application, and REST controller layers following DDD',
			'Integrated Prometheus and Exporters (Node, MySQL, Redis) for comprehensive system monitoring and metrics scraping',
			'Implemented environment isolation and containerized deployment with Docker Compose',
			'Authored SQL initialization scripts and managed database setup for domain models',
		],
		tags: ['Java', 'Spring Boot', 'DDD', 'MySQL', 'Prometheus', 'Docker'],
		icon: 'train',
		repoUrl: 'https://github.com/tamph973/springboot-train-ticket-demo',
	},
	{
		id: '3',
		title: 'Second-Hand E-Commerce',
		description:
			'A moderated second-hand e-commerce platform with Node.js/Express backend, integrated machine learning for product moderation, and real-time features.',
		backendHighlights: [
			'Developed REST APIs with Node.js/Express, MongoDB aggregations, and JWT-based Role-Based Access Control (RBAC)',
			'Integrated Google Cloud Vision API and TensorFlow.js for automated image content filtering and authenticity verification',
			'Built real-time notifications and live chat using Socket.io for order status and price change alerts',
			'Configured payment gateways including VNPay, MoMo, and ZaloPay for diverse transaction options',
		],
		tags: [
			'Node.js',
			'Express',
			'MongoDB',
			'Socket.io',
			'Redis',
			'GC Vision',
		],
		icon: 'storefront',
		repoUrl: 'https://github.com/tamph973/second-hand-e-commerce',
	},
	{
		id: '4',
		title: 'TKT Phone Shop',
		description:
			'A full-stack e-commerce phone shop with React frontend and Node.js/Express backend featuring JWT authentication and VNPAY integration.',
		backendHighlights: [
			'Built RESTful APIs using Node.js and Express with MongoDB/Mongoose for data persistence',
			'Implemented secure user authentication and authorization using JSON Web Tokens (JWT) and bcrypt',
			'Integrated VNPay gateway for processing secure digital payments',
			'Configured automated email notifications using Nodemailer',
		],
		tags: ['Node.js', 'Express', 'MongoDB', 'React', 'VNPay', 'JWT'],
		icon: 'smartphone',
		repoUrl: 'https://github.com/khangtong/tkt-phone-shop',
	},
];

export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: 'Backend (Primary)',
		icon: 'dns',
		colorClass: 'text-primary bg-blue-100',
		isPrimary: true,
		items: [
			{
				label: 'Java / Spring Boot',
				description: 'REST API, DI, Spring Security, JPA/Hibernate',
			},
			{
				label: 'Node.js / Express',
				description: 'RESTful API, MVC, Middleware',
			},
			{
				label: 'Authentication',
				description: 'JWT, OAuth2, RBAC, Session',
			},
			{
				label: 'API Design',
				description: 'CRUD, Validation, Error Handling, Swagger',
			},
		],
	},
	{
		title: 'Databases',
		icon: 'database',
		colorClass: 'text-green-600 bg-green-100',
		items: [
			{
				label: 'MySQL / PostgreSQL',
				description: 'Schema Design, Joins, Indexes, Transactions',
			},
			{
				label: 'MongoDB',
				description: 'Mongoose, Aggregation, Document Modeling',
			},
			{ label: 'Redis', description: 'Caching, Session Store, Pub/Sub' },
			{
				label: 'Data Modeling',
				description: 'Normalization, Relations, ER Diagrams',
			},
		],
	},
	{
		title: 'Architecture & Concepts',
		icon: 'architecture',
		colorClass: 'text-indigo-600 bg-indigo-100',
		items: [
			{
				label: 'REST API Design',
				description: 'Resource naming, Versioning, Status codes',
			},
			{
				label: 'MVC / Layered',
				description: 'Controller → Service → Repository',
			},
			{
				label: 'Clean Architecture',
				description: 'Separation of concerns, Dependency inversion',
			},
			{
				label: 'Microservices (Basic)',
				description: 'Service decomposition, API Gateway',
			},
		],
	},
	{
		title: 'DevOps & Tools',
		icon: 'build',
		colorClass: 'text-orange-600 bg-orange-100',
		items: [
			{
				label: 'Docker',
				description: 'Containerization, Docker Compose',
			},
			{
				label: 'Git & GitHub',
				description: 'Branching, Pull Requests, Code Review',
			},
			{
				label: 'CI/CD Basics',
				description: 'GitHub Actions, Automated builds',
			},
			{
				label: 'Postman',
				description: 'API Testing, Collections, Environments',
			},
		],
	},
	{
		title: 'Frontend (Supporting)',
		icon: 'web',
		colorClass: 'text-purple-600 bg-purple-100',
		items: [
			{ label: 'React.js', description: 'Components, Hooks, State' },
			{
				label: 'REST Integration',
				description: 'Axios, Fetch, Error handling',
			},
			{
				label: 'TanStack Query',
				description: 'Server State, Caching',
			},
		],
	},
];

export const SYSTEM_PRINCIPLES: SystemPrinciple[] = [
	{
		title: 'Security',
		description:
			'Authentication & authorization flows, OWASP basics, input validation, and secure data handling with encryption at rest and in transit.',
		icon: 'security',
	},
	{
		title: 'Performance',
		description:
			'Efficient database queries with indexing, Redis caching strategies, pagination, and connection pooling to minimize API response times.',
		icon: 'speed',
	},
	{
		title: 'Clean Architecture',
		description:
			'Layered separation of concerns (Controller → Service → Repository), dependency injection, and modular code that is easy to test and extend.',
		icon: 'architecture',
	},
	{
		title: 'Scalability',
		description:
			'Stateless RESTful APIs, horizontal scaling awareness, database read replicas, and understanding of how systems grow with users and data.',
		icon: 'cloud',
	},
];

export const REQUEST_FLOW: ArchitectureFlow[] = [
	{ label: 'Client', icon: 'devices', color: 'bg-slate-600' },
	{ label: 'Controller', icon: 'route', color: 'bg-blue-600' },
	{ label: 'Service', icon: 'settings', color: 'bg-indigo-600' },
	{ label: 'Repository', icon: 'storage', color: 'bg-purple-600' },
	{ label: 'Database', icon: 'database', color: 'bg-green-600' },
];

export const AUTH_FLOW: ArchitectureFlow[] = [
	{ label: 'Login Request', icon: 'login', color: 'bg-amber-600' },
	{
		label: 'Validate Credentials',
		icon: 'verified_user',
		color: 'bg-orange-600',
	},
	{ label: 'Generate JWT', icon: 'key', color: 'bg-red-600' },
	{ label: 'Return Token', icon: 'token', color: 'bg-emerald-600' },
	{ label: 'Auth Middleware', icon: 'shield', color: 'bg-blue-600' },
];
