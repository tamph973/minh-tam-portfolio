import React from 'react';
import { motion } from 'motion/react';
import { TerminalCode } from './TerminalCode';

export const About: React.FC = () => {
	const highlights = [
		{
			icon: 'api',
			title: 'Backend-First Mindset',
			text: 'I focus on API design, data modeling, authentication flows, and server-side logic as my core competency.',
		},
		{
			icon: 'code',
			title: 'Code Quality & Architecture',
			text: 'I write clean, well-structured code following layered architecture principles — separation of concerns, dependency injection, and testable modules.',
		},
		{
			icon: 'trending_up',
			title: 'Continuous Learning',
			text: 'Progressing from personal projects to real-world application development, always learning backend engineering best practices and new patterns.',
		},
	];

	return (
		<motion.section
			className='py-20 bg-white dark:bg-[#0f172a] transition-colors duration-300'
			id='about'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
					<div>
						<h2 className='text-3xl font-bold tracking-tight text-[#111418] dark:text-white mb-8'>
							About Me
						</h2>
						<div className='space-y-6'>
							{highlights.map((item) => (
								<div
									key={item.title}
									className='flex gap-4 items-start'>
									<div className='flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
										<span className='material-symbols-outlined text-primary text-xl'>
											{item.icon}
										</span>
									</div>
									<div>
										<h3 className='font-semibold text-[#111418] dark:text-white mb-1'>
											{item.title}
										</h3>
										<p className='text-sm text-[#637588] dark:text-gray-400 leading-relaxed'>
											{item.text}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Terminal Code */}
					<div>
						<TerminalCode />
					</div>
				</div>
			</div>
		</motion.section>
	);
};
