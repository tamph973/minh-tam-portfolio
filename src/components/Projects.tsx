import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../constants';

export const Projects: React.FC = () => {
	return (
		<motion.section
			className='py-20 bg-[#f9fafb] dark:bg-[#111827] transition-colors duration-300'
			id='projects'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4'>
					<div>
						<h2 className='text-3xl font-bold text-[#111418] dark:text-white mb-2'>
							Featured Projects
						</h2>
						<p className='text-[#637588] dark:text-gray-400'>
							Selected works demonstrating complex backend logic
							and full-stack integration.
						</p>
					</div>
					<a
						className='text-primary font-medium hover:text-blue-600 inline-flex items-center gap-1 group'
						href='https://github.com/tamph973'
						target='_blank'>
						View GitHub
						<span className='material-symbols-outlined text-lg transition-transform group-hover:translate-x-1'>
							arrow_forward
						</span>
					</a>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{PROJECTS.map((project) => (
						<div
							key={project.id}
							className='group bg-white dark:bg-[#1e293b] rounded-xl border border-[#e5e7eb] dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-blue-500/5 flex flex-col h-full overflow-hidden cursor-pointer'>
							<div className='h-48 bg-[#f1f5f9] dark:bg-[#334155] overflow-hidden relative'>
								<div className='absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600'>
									<span className='material-symbols-outlined text-6xl'>
										{project.icon}
									</span>
								</div>
							</div>
							<div className='p-6 flex flex-col flex-grow'>
								<h3 className='text-xl font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors mb-2'>
									{project.title}
								</h3>
								<p className='text-[#637588] dark:text-gray-400 text-sm mb-6 flex-grow '>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2 mb-6'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-mono'>
											{tag}
										</span>
									))}
								</div>
								<div className='flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800'>
									<a
										className='flex items-center gap-2 text-sm font-semibold text-[#111418] dark:text-white hover:text-primary'
										href={project.liveUrl}>
										<span className='material-symbols-outlined text-lg'>
											rocket_launch
										</span>{' '}
										Live Demo
									</a>
									<a
										className='flex items-center gap-2 text-sm font-semibold text-[#111418] dark:text-white hover:text-primary'
										href={project.githubUrl}>
										<span className='material-symbols-outlined text-lg'>
											code
										</span>{' '}
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
};
