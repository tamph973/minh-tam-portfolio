import React from 'react';

interface NavbarProps {
	isDark: boolean;
	toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
	return (
		<nav className='sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-[#f0f2f4] dark:border-gray-800 transition-colors duration-300'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center gap-2'>
						<span className='material-symbols-outlined text-primary text-2xl font-bold'>
							terminal
						</span>
						<span className='text-xl font-bold tracking-tight text-[#111418] dark:text-white'>
							Minh Tam
						</span>
					</div>
					<div className='hidden md:flex items-center gap-8'>
						<a
							className='text-sm font-medium text-[#637588] dark:text-gray-400 hover:text-primary transition-colors'
							href='#about'>
							About
						</a>
						<a
							className='text-sm font-medium text-[#637588] dark:text-gray-400 hover:text-primary transition-colors'
							href='#projects'>
							Projects
						</a>
						<a
							className='text-sm font-medium text-[#637588] dark:text-gray-400 hover:text-primary transition-colors'
							href='#skills'>
							Skills
						</a>
						<a
							className='text-sm font-medium text-[#637588] dark:text-gray-400 hover:text-primary transition-colors'
							href='#contact'>
							Contact
						</a>

						<button
							onClick={toggleTheme}
							className='p-2 rounded-lg text-[#637588] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center'
							aria-label='Toggle Dark Mode'>
							<span className='material-symbols-outlined'>
								{isDark ? 'light_mode' : 'dark_mode'}
							</span>
						</button>

						<a
							className='inline-flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all'
							href='/cv-minh-tam.pdf'
							download>
							Resume
						</a>
					</div>
					<div className='md:hidden flex items-center gap-4'>
						<button
							onClick={toggleTheme}
							className='p-2 rounded-lg text-[#637588] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all'>
							<span className='material-symbols-outlined'>
								{isDark ? 'light_mode' : 'dark_mode'}
							</span>
						</button>
						<button className='p-2 rounded-md text-gray-500 hover:text-primary'>
							<span className='material-symbols-outlined'>
								menu
							</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
