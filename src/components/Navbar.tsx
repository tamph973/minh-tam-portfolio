import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface NavbarProps {
	isDark: boolean;
	toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	return (
		<nav className='sticky top-0 z-50 w-full bg-white dark:bg-[#020617] border-b border-[#f0f2f4] dark:border-gray-800 transition-colors duration-300'>
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
							href='/PhamMinhTam_Resume.pdf'
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
						<button
							type='button'
							onClick={() => setIsMobileOpen((open) => !open)}
							className='p-2 rounded-md text-gray-500 hover:text-primary'
							aria-label='Toggle navigation menu'
							aria-expanded={isMobileOpen}>
							<span className='material-symbols-outlined'>
								menu
							</span>
						</button>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isMobileOpen && (
					<motion.div
						key='mobile-nav'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.18 }}
						className='fixed inset-0 z-40 md:hidden'>
						<button
							type='button'
							onClick={() => setIsMobileOpen(false)}
							className='absolute inset-0 bg-black/40 backdrop-blur-sm'
							aria-label='Close navigation overlay'
						/>
						<motion.aside
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{ duration: 0.22, ease: 'easeOut' }}
							className='absolute inset-y-0 left-0 w-72 max-w-xs bg-[#0f172a]/95 text-white shadow-xl flex flex-col'>
							<div className='flex items-center justify-between px-4 h-16 border-b border-white/10'>
								<div className='flex items-center gap-2'>
									<span className='material-symbols-outlined text-primary text-2xl font-bold'>
										terminal
									</span>
									<span className='text-lg font-semibold'>
										Minh Tam
									</span>
								</div>
								<button
									type='button'
									onClick={() => setIsMobileOpen(false)}
									className='p-2 rounded-full hover:bg-white/10'
									aria-label='Close menu'>
									<span className='material-symbols-outlined'>
										arrow_back
									</span>
								</button>
							</div>
							<nav className='flex-1 py-3'>
								<a
									href='#'
									onClick={() => setIsMobileOpen(false)}
									className='flex items-center gap-3 px-5 py-3 text-sm font-medium hover:bg-white/10'>
									<span className='material-symbols-outlined text-base'>
										home
									</span>
									<span>Home</span>
								</a>
								<a
									href='#projects'
									onClick={() => setIsMobileOpen(false)}
									className='flex items-center gap-3 px-5 py-3 text-sm font-medium hover:bg-white/10'>
									<span className='material-symbols-outlined text-base'>
										dashboard
									</span>
									<span>Projects</span>
								</a>
								<a
									href='#skills'
									onClick={() => setIsMobileOpen(false)}
									className='flex items-center gap-3 px-5 py-3 text-sm font-medium hover:bg-white/10'>
									<span className='material-symbols-outlined text-base'>
										psychology
									</span>
									<span>Skills</span>
								</a>
								<a
									href='#about'
									onClick={() => setIsMobileOpen(false)}
									className='flex items-center gap-3 px-5 py-3 text-sm font-medium hover:bg-white/10'>
									<span className='material-symbols-outlined text-base'>
										person
									</span>
									<span>About</span>
								</a>
								<a
									href='#contact'
									onClick={() => setIsMobileOpen(false)}
									className='flex items-center gap-3 px-5 py-3 text-sm font-medium hover:bg-white/10'>
									<span className='material-symbols-outlined text-base'>
										mail
									</span>
									<span>Contact</span>
								</a>
								<div className='border-t border-white/10 p-4'>
									<a
										href='/PhamMinhTam_Resume.pdf'
										download
										onClick={() => setIsMobileOpen(false)}
										className='flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-primary text-sm font-bold hover:bg-primary/90'>
										<span className='material-symbols-outlined text-base'>
											description
										</span>
										<span>Download CV</span>
									</a>
								</div>
							</nav>
						</motion.aside>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};
