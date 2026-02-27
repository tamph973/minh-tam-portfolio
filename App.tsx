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

		let rafId: number | null = null;
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			if (rafId !== null) return;

			rafId = requestAnimationFrame(() => {
				const currentScrollY = window.scrollY;

				if (Math.abs(currentScrollY - lastScrollY) > 50) {
					setShowScrollTop(currentScrollY > 400);
					lastScrollY = currentScrollY;
				}

				rafId = null;
			});
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
			}
		};
	}, []);

	const toggleTheme = () => setIsDark(!isDark);

	const scrollToTop = () => {
		const duration = 800; // milliseconds
		const start = window.scrollY;
		const startTime = performance.now();

		const easeInOutCubic = (t: number): number => {
			return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
		};

		const animateScroll = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easeProgress = easeInOutCubic(progress);

			window.scrollTo(0, start * (1 - easeProgress));

			if (progress < 1) {
				requestAnimationFrame(animateScroll);
			}
		};

		requestAnimationFrame(animateScroll);
	};

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
			<button
				type='button'
				onClick={scrollToTop}
				className={`fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-primary text-white shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 ${
					showScrollTop
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-16 pointer-events-none'
				} `}
				aria-label='Scroll to top'
				aria-hidden={!showScrollTop}>
				<span className='material-symbols-outlined text-xl'>
					arrow_upward
				</span>
			</button>
			<Footer />
		</div>
	);
};

export default App;
