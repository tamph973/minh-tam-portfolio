import React from 'react';

export const Footer: React.FC = () => {
	return (
		<footer className='bg-[#f9fafb] dark:bg-[#111827] border-t border-[#e5e7eb] dark:border-gray-800 py-12 transition-colors duration-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6'>
				<div className='flex items-center gap-2'>
					<span className='material-symbols-outlined text-primary'>
						terminal
					</span>
					<span className='text-sm font-semibold text-[#111418] dark:text-white'>
						Minh Tam © {new Date().getFullYear()}
					</span>
				</div>
				<div className='flex gap-6'>
					<a
						className='text-sm text-[#637588] dark:text-gray-400 hover:text-primary transition-colors'
						href='#about'>
						About
					</a>
					<a
						className='text-sm text-[#637588] dark:text-gray-400 hover:text-primary transition-colors'
						href='#projects'>
						Projects
					</a>
					<a
						className='text-sm text-[#637588] dark:text-gray-400 hover:text-primary transition-colors'
						href='#contact'>
						Contact
					</a>
				</div>
				<div className='text-sm text-[#637588] dark:text-gray-500'>
					Designed with precision.
				</div>
			</div>
		</footer>
	);
};
