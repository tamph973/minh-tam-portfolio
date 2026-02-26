import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../../constants';

export const Skills: React.FC = () => {
	return (
		<motion.section
			className='py-20 bg-white dark:bg-[#0f172a] transition-colors duration-300'
			id='skills'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4'>
					<div>
						<h2 className='text-3xl font-bold text-[#111418] dark:text-white mb-2'>
							Technical Skills
						</h2>
						<p className='text-[#637588] dark:text-gray-400'>
							Core competencies organized by backend priority —
							from primary stack to supporting tools.
						</p>
					</div>
				</div>

				{/* Primary skill (Backend) takes full width emphasis */}
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
					{SKILL_CATEGORIES.map((cat, idx) => (
						<div
							key={idx}
							className={`rounded-xl p-6 border shadow-sm hover:shadow-md transition-all group ${
								cat.isPrimary
									? 'bg-primary/5 dark:bg-blue-900/10 border-primary/30 dark:border-blue-700/30 md:col-span-2 xl:col-span-1 xl:row-span-2'
									: 'bg-gray-50 dark:bg-[#1e293b] border-gray-200 dark:border-gray-800 hover:border-primary/30'
							}`}>
							<div className='flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700'>
								<div
									className={`p-2 ${cat.colorClass} dark:bg-opacity-20 rounded-lg`}>
									<span className='material-symbols-outlined'>
										{cat.icon}
									</span>
								</div>
								<div>
									<h3 className='font-bold text-lg text-[#111418] dark:text-white'>
										{cat.title}
									</h3>
									{cat.isPrimary && (
										<span className='text-xs text-primary font-medium'>
											Core Focus
										</span>
									)}
								</div>
							</div>
							<ul className='space-y-4'>
								{cat.items.map((item, i) => (
									<li
										key={i}
										className='flex items-start gap-3'>
										<span
											className={`material-symbols-outlined text-sm mt-0.5 ${
												cat.colorClass.split(' ')[0]
											}`}>
											check_circle
										</span>
										<div className='flex flex-col'>
											<span className='text-sm font-semibold text-[#111418] dark:text-gray-200'>
												{item.label}
											</span>
											<span className='text-xs text-[#637588] dark:text-gray-400'>
												{item.description}
											</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
};
