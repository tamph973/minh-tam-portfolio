import React, { useState, useEffect } from 'react';
import { Navbar } from '~/components/Navbar';
import { Hero } from '~/components/Hero';
import { About } from '~/components/About';
import { Projects } from '~/components/Projects';
import { Skills } from '~/components/Skills';
import { SystemThinking } from '~/components/SystemThinking';
import { Contact } from '~/components/Contact';
import { Footer } from '~/components/Footer';

const App: React.FC = () => {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('theme');
			return (
				saved === 'dark' ||
				(!saved &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			);
		}
		return false;
	});

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDark]);

	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = () => setIsDark(!isDark);

	return (
		<div className='min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300'>
			<Navbar isDark={isDark} toggleTheme={toggleTheme} />
			<main>
				<Hero />
				<About />
				<Projects />
				<Skills />
				<SystemThinking />
				<Contact />
			</main>
			{showScrollTop && (
				<button
					type='button'
					onClick={() =>
						window.scrollTo({ top: 0, behavior: 'smooth' })
					}
					className='fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full bg-primary text-white shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-600 transition-all'
					aria-label='Scroll to top'>
					<span className='material-symbols-outlined text-xl'>
						arrow_upward
					</span>
				</button>
			)}
			<Footer />
		</div>
	);
};

export default App;
