import React from 'react';
import { motion } from 'motion/react';
import { TerminalCode } from './TerminalCode';

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
							<p className='text-justify'>
								I am a backend-focused developer with experience
								building RESTful APIs using Node.js and Spring
								Boot. I enjoy working on server-side logic,
								authentication flows, and database-driven
								applications.
							</p>
							<p className='text-justify'>
								I focus on writing clean, maintainable code and
								designing APIs that are easy to use and extend.
								Through personal and academic projects, I have
								gained hands-on experience with relational and
								NoSQL databases, and I am eager to continue
								learning backend engineering best practices in
								real-world environments.
							</p>
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
