import { Project, SkillCategory, SystemPrinciple } from './types';

export const PROJECTS: Project[] = [
	{
		id: '1',
		title: 'Microservices E-commerce',
		description:
			'A distributed order processing system handling high-concurrency transactions. Implements inventory locking and consistent payments via microservices.',
		tags: ['NodeJS', 'Express', 'PostgreSQL', 'Redis'],
		icon: 'shopping_cart_checkout',
		liveUrl: '#',
		githubUrl: 'https://github.com/tamph973?tab=repositories'
	},
	{
		id: '2',
		title: 'Real-time Analytics Dashboard',
		description:
			'Fullstack dashboard visualizing large datasets. Uses WebSockets for live data updates and optimized MongoDB aggregation pipelines for reporting.',
		tags: ['React', 'NodeJS', 'MongoDB', 'Socket.io'],
		icon: 'analytics',
		liveUrl: '#',
		githubUrl: 'https://github.com/tamph973?tab=repositories'
	},
	{
		id: '3',
		title: 'AuthN / AuthZ Service',
		description:
			'Centralized identity management system with OAuth2 and JWT. Features role-based access control and containerized deployment.',
		tags: ['NodeJS', 'JWT', 'TypeScript', 'Docker'],
		icon: 'lock_person',
		liveUrl: '#',
		githubUrl: 'https://github.com/tamph973?tab=repositories'
	}
];

export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: 'Backend Development',
		icon: 'dns',
		colorClass: 'text-primary bg-blue-100',
		items: [
			{
				label: 'Node.js / Express.js',
				description: 'RESTful API, MVC Structure'
			},
			{
				label: 'Spring Boot',
				description: 'REST API, Dependency Injection'
			},
			{ label: 'Authentication', description: 'JWT, Role-based Access' },
			{
				label: 'API Design',
				description: 'CRUD, Validation, Error Handling'
			}
		]
	},
	{
		title: 'Databases',
		icon: 'database',
		colorClass: 'text-green-600 bg-green-100',
		items: [
			{ label: 'MySQL', description: 'Schema Design, Joins, Indexes' },
			{ label: 'MongoDB', description: 'Mongoose, Document Modeling' },
			{
				label: 'Data Modeling',
				description: 'Relations & Normalization'
			},
			{ label: 'Transactions', description: 'Basic ACID Concepts' }
		]
	},
	{
		title: 'Frontend (Basic)',
		icon: 'web',
		colorClass: 'text-purple-600 bg-purple-100',
		items: [
			{ label: 'React.js', description: 'Components, Hooks' },
			{ label: 'REST API Integration', description: 'Axios, Fetch' },
			{
				label: 'TanStack Query',
				description: 'Server State, Caching (Basic)'
			},
			{
				label: 'State Management',
				description: 'Context / Redux (Basic)'
			}
		]
	},
	{
		title: 'Tools & Workflow',
		icon: 'build',
		colorClass: 'text-orange-600 bg-orange-100',
		items: [
			{ label: 'Git & GitHub', description: 'Branching, Pull Requests' },
			{
				label: 'Docker (Basic)',
				description: 'Run services with Docker Compose'
			},
			{ label: 'Postman', description: 'API Testing' },
			{ label: 'Vercel', description: 'Deploy Frontend & Preview' }
		]
	} 
];

export const SYSTEM_PRINCIPLES: SystemPrinciple[] = [
	{
		title: 'Security',
		description:
			'Applying proper authentication and authorization flows, following OWASP basic practices, and handling sensitive data carefully.',
		icon: 'security'
	},
	{
		title: 'Performance',
		description:
			'Writing efficient database queries, understanding indexing, and using caching (Redis) to improve API response time.',
		icon: 'speed'
	},
	{
		title: 'Clean Architecture',
		description:
			'Structuring backend code in a clear, modular way with separation of concerns to make it easier to read, test, and maintain.',
		icon: 'architecture'
	},
	{
		title: 'Scalability',
		description:
			'Building stateless RESTful APIs and understanding how systems can grow as users and data increase.',
		icon: 'cloud'
	}
];

