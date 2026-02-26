import React from 'react';
import { motion } from 'motion/react';
import { SYSTEM_PRINCIPLES, REQUEST_FLOW, AUTH_FLOW } from '../../constants';
import { ArchitectureFlow } from '../../types';

const FlowDiagram: React.FC<{
	title: string;
	icon: string;
	flows: ArchitectureFlow[];
}> = ({ title, icon, flows }) => (
	<div className='mb-8'>
		<h3 className='text-sm font-bold uppercase tracking-wider text-[#637588] dark:text-gray-400 mb-4 flex items-center gap-2'>
			<span className='material-symbols-outlined text-base text-primary'>
				{icon}
			</span>
			{title}
		</h3>
		<div className='flex items-center gap-0 overflow-x-auto pb-2'>
			{flows.map((step, idx) => (
				<React.Fragment key={step.label}>
					<motion.div
						className='flex flex-col items-center min-w-[100px] flex-shrink-0'
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.4,
							delay: idx * 0.12,
							ease: 'easeOut',
						}}>
						<div
							className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-lg mb-2`}>
							<span className='material-symbols-outlined text-white text-xl'>
								{step.icon}
							</span>
						</div>
						<span className='text-xs font-semibold text-[#111418] dark:text-gray-200 text-center whitespace-nowrap'>
							{step.label}
						</span>
					</motion.div>
					{idx < flows.length - 1 && (
						<motion.div
							className='flex-shrink-0 mx-1'
							initial={{ opacity: 0, scaleX: 0 }}
							whileInView={{ opacity: 1, scaleX: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.3,
								delay: idx * 0.12 + 0.1,
							}}>
							<span className='material-symbols-outlined text-gray-400 dark:text-gray-600 text-lg'>
								arrow_forward
							</span>
						</motion.div>
					)}
				</React.Fragment>
			))}
		</div>
	</div>
);

export const SystemThinking: React.FC = () => {
	return (
		<motion.section
			className='py-20 bg-[#f9fafb] dark:bg-[#111827] transition-colors duration-300'
			id='system'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.15 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-white dark:bg-[#1e293b] rounded-2xl p-8 lg:p-12 border border-[#e5e7eb] dark:border-gray-800 shadow-sm transition-colors'>
					<div className='text-center max-w-3xl mx-auto mb-12'>
						<h2 className='text-3xl font-bold text-[#111418] dark:text-white mb-4'>
							System Thinking
						</h2>
						<p className='text-[#637588] dark:text-gray-400 text-lg'>
							I think in systems, not just code. Here's how I
							approach backend architecture and security.
						</p>
					</div>

					{/* Flow Diagrams */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
						<div className='bg-gray-50 dark:bg-[#0f172a] rounded-xl p-6 border border-gray-200 dark:border-gray-700'>
							<FlowDiagram
								title='Request Lifecycle'
								icon='route'
								flows={REQUEST_FLOW}
							/>
						</div>
						<div className='bg-gray-50 dark:bg-[#0f172a] rounded-xl p-6 border border-gray-200 dark:border-gray-700'>
							<FlowDiagram
								title='Authentication Flow'
								icon='shield'
								flows={AUTH_FLOW}
							/>
						</div>
					</div>

					{/* System Principles */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{SYSTEM_PRINCIPLES.map((principle, idx) => (
							<motion.div
								key={idx}
								className='flex flex-col items-center text-center p-4'
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: idx * 0.1,
								}}>
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
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.section>
	);
};
