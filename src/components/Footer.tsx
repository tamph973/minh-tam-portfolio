import React from 'react';

export const Footer: React.FC = () => {
	return (
		<footer className='bg-[#f9fafb] dark:bg-[#020617] border-t border-[#e5e7eb] dark:border-[#0b1220] py-8 transition-colors duration-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6'>
				<div className='flex items-center gap-2'>
					<span className='material-symbols-outlined text-primary'>
						terminal
					</span>
					<span className='text-sm font-semibold text-[#111418] dark:text-gray-100'>
						Minh Tam © {new Date().getFullYear()}
					</span>
				</div>
				<div className='flex gap-6 text-sm'>
					<a
						className='text-[#637588] dark:text-gray-400 hover:text-primary transition-colors font-medium'
						href='#about'>
						About
					</a>
					<a
						className='text-[#637588] dark:text-gray-400 hover:text-primary transition-colors font-medium'
						href='#projects'>
						Projects
					</a>
					<a
						className='text-[#637588] dark:text-gray-400 hover:text-primary transition-colors font-medium'
						href='#contact'>
						Contact
					</a>
				</div>
				<div className='text-sm text-[#637588] dark:text-gray-500'>
					All rights reserved.
				</div>
			</div>
		</footer>
	);
};
