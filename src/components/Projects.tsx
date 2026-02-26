import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../constants';

export const Projects: React.FC = () => {
	const accentColors = [
		'border-l-blue-500',
		'border-l-emerald-500',
		'border-l-amber-500',
	];

	return (
		<motion.section
			className='py-20 bg-[#f9fafb] dark:bg-[#111827] transition-colors duration-300'
			id='projects'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4'>
					<div>
						<h2 className='text-3xl font-bold text-[#111418] dark:text-white mb-2'>
							Featured Projects
						</h2>
						<p className='text-[#637588] dark:text-gray-400'>
							Backend-focused work demonstrating API design,
							database architecture, and system integration.
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
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{PROJECTS.map((project, idx) => (
						<div
							key={project.id}
							className={`group bg-white dark:bg-[#1e293b] rounded-xl border border-[#e5e7eb] dark:border-gray-800 border-l-4 ${accentColors[idx % accentColors.length]} hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col h-full overflow-hidden`}>
							{/* Header */}
							<div className='p-6 pb-4'>
								<div className='flex items-center gap-3 mb-3'>
									<div className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
										<span className='material-symbols-outlined text-xl text-[#637588] dark:text-gray-400'>
											{project.icon}
										</span>
									</div>
									<h3 className='text-lg font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors'>
										{project.title}
									</h3>
								</div>
								<p className='text-[#637588] dark:text-gray-400 text-sm leading-relaxed'>
									{project.description}
								</p>
							</div>

							{/* Backend Highlights */}
							<div className='px-6 pb-4 flex-grow'>
								<h4 className='text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-gray-300 mb-3 flex items-center gap-1.5'>
									<span className='material-symbols-outlined text-sm text-primary'>
										terminal
									</span>
									Backend Responsibilities
								</h4>
								<ul className='space-y-2'>
									{project.backendHighlights.map(
										(highlight, i) => (
											<li
												key={i}
												className='flex items-start gap-2 text-xs text-[#637588] dark:text-gray-400'>
												<span className='material-symbols-outlined text-xs text-primary mt-0.5 flex-shrink-0'>
													chevron_right
												</span>
												<span>{highlight}</span>
											</li>
										),
									)}
								</ul>
							</div>

							{/* Tech Stack Badges */}
							<div className='px-6 pb-4'>
								<div className='flex flex-wrap gap-1.5'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-mono'>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Action Buttons */}
							<div className='px-6 pb-6 pt-2 mt-auto border-t border-gray-100 dark:border-gray-800'>
								<div className='flex items-center gap-4 pt-3'>
									{project.repoUrl && (
										<a
											className='flex items-center gap-1.5 text-sm font-semibold text-[#111418] dark:text-white hover:text-primary transition-colors'
											href={project.repoUrl}
											target='_blank'>
											<span className='material-symbols-outlined text-lg'>
												code
											</span>
											Backend Repo
										</a>
									)}
									{project.docsUrl && (
										<a
											className='flex items-center gap-1.5 text-sm font-semibold text-[#111418] dark:text-white hover:text-primary transition-colors'
											href={project.docsUrl}
											target='_blank'>
											<span className='material-symbols-outlined text-lg'>
												description
											</span>
											API Docs
										</a>
									)}
									{project.liveUrl && (
										<a
											className='flex items-center gap-1.5 text-sm font-semibold text-[#111418] dark:text-white hover:text-primary transition-colors'
											href={project.liveUrl}
											target='_blank'>
											<span className='material-symbols-outlined text-lg'>
												rocket_launch
											</span>
											Demo
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
};
