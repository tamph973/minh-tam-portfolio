import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
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
						<h2 className='text-3xl font-bold tracking-tight text-[#111418] dark:text-white mb-6'>
							About Me
						</h2>
						<div className='space-y-6 text-[#637588] dark:text-gray-400 text-lg leading-relaxed'>
							<p>
								I am a Backend-focused Fullstack Developer with
								a passion for building systems that scale. My
								expertise lies in designing reliable backend
								architectures, optimizing database performance,
								and implementing secure authentication flows.
							</p>
							<p>
								With a strong foundation in API design and
								microservices, I ensure that the applications I
								build are not just functional, but also
								maintainable and efficient under high load. I
								approach every challenge with an engineering
								mindset—prioritizing data integrity, security,
								and long-term scalability.
							</p>
						</div>
					</div>
					<div className='bg-[#f8f9fa] dark:bg-[#1e293b] rounded-2xl p-8 border border-[#e5e7eb] dark:border-gray-800 shadow-sm overflow-hidden transition-colors'>
						<div className='flex items-center justify-between mb-8 pb-4 border-b border-[#e5e7eb] dark:border-gray-700'>
							<div className='flex gap-2'>
								<div className='w-3 h-3 rounded-full bg-red-400'></div>
								<div className='w-3 h-3 rounded-full bg-yellow-400'></div>
								<div className='w-3 h-3 rounded-full bg-green-400'></div>
							</div>
							<div className='text-xs font-mono text-gray-400'>
								server.ts
							</div>
						</div>
						<pre className='font-mono text-sm leading-6 overflow-x-auto whitespace-pre text-gray-800 dark:text-gray-300'>
							<span className='text-purple-600 dark:text-purple-400'>
								import
							</span>{' '}
							express{' '}
							<span className='text-purple-600 dark:text-purple-400'>
								from
							</span>{' '}
							<span className='text-green-600 dark:text-green-400'>
								'express'
							</span>
							;{'\n'}
							<span className='text-purple-600 dark:text-purple-400'>
								import
							</span>{' '}
							{'{'} rateLimit {'}'}{' '}
							<span className='text-purple-600 dark:text-purple-400'>
								from
							</span>{' '}
							<span className='text-green-600 dark:text-green-400'>
								'express-rate-limit'
							</span>
							;{'\n'}
							<span className='text-gray-500'>
								// Initialize application security
							</span>
							{'\n'}
							<span className='text-blue-600 dark:text-blue-400'>
								const
							</span>{' '}
							app ={' '}
							<span className='text-yellow-600 dark:text-yellow-400'>
								express
							</span>
							();{'\n'}
							<span className='text-blue-600 dark:text-blue-400'>
								const
							</span>{' '}
							limiter ={' '}
							<span className='text-yellow-600 dark:text-yellow-400'>
								rateLimit
							</span>
							({'{'}
							{'\n'}
							{'  '}windowMs:{' '}
							<span className='text-orange-600 dark:text-orange-400'>
								15
							</span>{' '}
							*{' '}
							<span className='text-orange-600 dark:text-orange-400'>
								60
							</span>{' '}
							*{' '}
							<span className='text-orange-600 dark:text-orange-400'>
								1000
							</span>
							, {'\n'}
							{'  '}max:{' '}
							<span className='text-orange-600 dark:text-orange-400'>
								100
							</span>
							{'\n'}
							{'}'});{'\n'}
							<span className='text-gray-500'>
								// Middleware Stack
							</span>
							{'\n'}
							app.
							<span className='text-yellow-600 dark:text-yellow-400'>
								use
							</span>
							(limiter);{'\n'}
							app.
							<span className='text-yellow-600 dark:text-yellow-400'>
								use
							</span>
							(helmet());{'\n'}
							app.
							<span className='text-yellow-600 dark:text-yellow-400'>
								use
							</span>
							(express.
							<span className='text-yellow-600 dark:text-yellow-400'>
								json
							</span>
							());{'\n'}
							<span className='text-gray-500'>
								// Start reliable server
							</span>
							{'\n'}
							app.
							<span className='text-yellow-600 dark:text-yellow-400'>
								listen
							</span>
							(PORT, () =&gt; {'{'}
							{'\n'}
							{'  '}console.
							<span className='text-yellow-600 dark:text-yellow-400'>
								log
							</span>
							(
							<span className='text-green-600 dark:text-green-400'>
								`Server secure & ready.`
							</span>
							);{'\n'}
							{'}'});
						</pre>
					</div>
				</div>
			</div>
		</motion.section>
	);
};
