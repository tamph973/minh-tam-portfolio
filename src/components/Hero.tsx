import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
	return (
		<motion.section
			className='relative pt-24 pb-24 lg:pt-36 lg:pb-36 overflow-hidden bg-white dark:bg-[#0f172a] transition-colors duration-300'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0.2 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
				<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-8'>
					<span className='relative flex h-2 w-2'>
						<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
						<span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
					</span>
					Available for new opportunities
				</div>
				<h1 className='text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#111418] dark:text-white mb-4'>
					Minh Tam
				</h1>
				<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-8 tracking-tight'>
					Backend / Fullstack Developer
				</h2>
				<p className='text-lg sm:text-xl text-[#637588] dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed'>
					I build high-performance backend architectures, secure APIs,
					and scalable systems. Passionate about clean code, database
					optimization, and engineering robust product solutions.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<a
						className='w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-blue-600 transition-all shadow-sm shadow-blue-500/20'
						href='#projects'>
						View Projects
					</a>
					<a
						className='w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white dark:bg-gray-800 border border-[#dbe0e6] dark:border-gray-700 text-[#111418] dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-gray-700 transition-all'
						href='/cv-minh-tam.pdf'
						download>
						<span className='material-symbols-outlined mr-2 text-xl'>
							download
						</span>
						Download CV
					</a>
				</div>
			</div>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[850px] h-[800px] opacity-[0.05] dark:opacity-[0.07] pointer-events-none'>
				<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.4,70.9,32.2C59.6,43,48.3,51.8,36.4,58.8C24.5,65.9,12,71.2,-1.2,73.3C-14.4,75.4,-29.8,74.3,-42.9,67.6C-56,60.9,-66.8,48.6,-74.6,35.1C-82.4,21.6,-87.2,6.9,-85.2,-7.1C-83.2,-21.1,-74.4,-34.4,-63.4,-45.3C-52.4,-56.2,-39.2,-64.7,-25.9,-72.4C-12.6,-80.1,0.8,-87,14.6,-86.6C28.4,-86.2,42.5,-78.5,44.7,-76.4Z'
						fill='#137fec'
						transform='translate(100 100)'></path>
				</svg>
			</div>
		</motion.section>
	);
};
