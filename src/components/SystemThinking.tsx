import React from 'react';
import { motion } from 'motion/react';
import { SYSTEM_PRINCIPLES } from '../../constants';

export const SystemThinking: React.FC = () => {
	return (
		<motion.section
			className='py-20 bg-[#f9fafb] dark:bg-[#111827] transition-colors duration-300'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-white dark:bg-[#1e293b] rounded-2xl p-8 lg:p-12 border border-[#e5e7eb] dark:border-gray-800 shadow-sm transition-colors'>
					<div className='text-center max-w-3xl mx-auto mb-12'>
						<h2 className='text-3xl font-bold text-[#111418] dark:text-white mb-4'>
							System Thinking
						</h2>
						<p className='text-[#637588] dark:text-gray-400 text-lg'>
							I build with a product-oriented mindset, focusing on
							making technical decisions that lead to secure,
							maintainable, and reliable backend systems.
						</p>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{SYSTEM_PRINCIPLES.map((principle, idx) => (
							<div
								key={idx}
								className='flex flex-col items-center text-center p-4'>
								<div className='w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-4'>
									<span className='material-symbols-outlined text-3xl'>
										{principle.icon}
									</span>
								</div>
								<h3 className='text-lg font-bold text-[#111418] dark:text-white mb-2'>
									{principle.title}
								</h3>
								<p className='text-sm text-[#637588] dark:text-gray-400'>
									{principle.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
};
