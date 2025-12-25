import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface FormState {
	name: string;
	email: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

export const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormState>({
		name: '',
		email: '',
		message: ''
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const validate = (): boolean => {
		const newErrors: FormErrors = {};
		if (!formData.name.trim()) newErrors.name = 'Name is required';
		else if (formData.name.length < 2)
			newErrors.name = 'Name must be at least 2 characters';

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.message.trim()) newErrors.message = 'Message is required';
		else if (formData.message.length < 10)
			newErrors.message = 'Message must be at least 10 characters';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		setIsSubmitting(true);

		// Simulate API Latency
		await new Promise((resolve) => setTimeout(resolve, 1200));

		try {
			const existingSubmissions = JSON.parse(
				localStorage.getItem('portfolio_inquiries') || '[]'
			);
			const newSubmission = {
				...formData,
				timestamp: new Date().toISOString(),
				id: Math.random().toString(36).substr(2, 9)
			};
			localStorage.setItem(
				'portfolio_inquiries',
				JSON.stringify([...existingSubmissions, newSubmission])
			);

			setIsSuccess(true);
			setFormData({ name: '', email: '', message: '' });
		} catch (err) {
			console.error('Storage error:', err);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	return (
		<motion.section
			className='py-24 bg-white dark:bg-[#0f172a] transition-colors duration-300'
			id='contact'
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
					{/* Left Column: Info & Socials */}
					<div className='space-y-8'>
						<div>
							<h2 className='text-4xl font-black text-[#111418] dark:text-white mb-6'>
								Let's Build Something Together
							</h2>
							<p className='text-[#637588] dark:text-gray-400 text-lg leading-relaxed max-w-lg'>
								I'm currently looking for new opportunities and
								interesting projects. Whether you have a
								question or just want to say hi, I'll try my
								best to get back to you!
							</p>
						</div>

						<div className='grid grid-cols-2 gap-4'>
							<a
								className='flex items-center gap-4 p-4 rounded-xl border border-[#e5e7eb] dark:border-gray-800 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group'
								href='mailto:phtam0907@gmail.com'>
								<div className='w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/10'>
									<span className='material-symbols-outlined text-xl text-[#637588] dark:text-gray-400 group-hover:text-primary'>
										mail
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-xs text-[#637588] dark:text-gray-500 font-bold uppercase tracking-wider'>
										Email
									</span>
									<span className='text-sm font-bold text-[#111418] dark:text-white'>
										phtam0907@gmail.com
									</span>
								</div>
							</a>
							<a
								className='flex items-center gap-4 p-4 rounded-xl border border-[#e5e7eb] dark:border-gray-800 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group'
								href='https://github.com/tamph973'
								target='_blank'>
								<div className='w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/10'>
									<span className='material-symbols-outlined text-xl text-[#637588] dark:text-gray-400 group-hover:text-primary'>
										commit
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-xs text-[#637588] dark:text-gray-500 font-bold uppercase tracking-wider'>
										Github
									</span>
									<span className='text-sm font-bold text-[#111418] dark:text-white'>
										@tamph973
									</span>
								</div>
							</a>
							<a
								className='flex items-center gap-4 p-4 rounded-xl border border-[#e5e7eb] dark:border-gray-800 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group'
								href='https://www.linkedin.com/in/tamph973/'
								target='_blank'>
								<div className='w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/10'>
									<span className='material-symbols-outlined text-xl text-[#637588] dark:text-gray-400 group-hover:text-primary'>
										person_add
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-xs text-[#637588] dark:text-gray-500 font-bold uppercase tracking-wider'>
										LinkedIn
									</span>
									<span className='text-sm font-bold text-[#111418] dark:text-white'>
										Pham Minh Tam
									</span>
								</div>
							</a>
							<a
								className='flex items-center gap-4 p-4 rounded-xl border border-[#e5e7eb] dark:border-gray-800 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group'
								href='/cv-minh-tam.pdf'
								download>
								<div className='w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary/10'>
									<span className='material-symbols-outlined text-xl text-[#637588] dark:text-gray-400 group-hover:text-primary'>
										description
									</span>
								</div>
								<div className='flex flex-col'>
									<span className='text-xs text-[#637588] dark:text-gray-500 font-bold uppercase tracking-wider'>
										CV
									</span>
									<span className='text-sm font-bold text-[#111418] dark:text-white'>
										Download
									</span>
								</div>
							</a>
						</div>
					</div>

					{/* Right Column: Contact Form */}
					<div className='bg-[#f9fafb] dark:bg-[#1e293b] p-8 rounded-2xl border border-[#e5e7eb] dark:border-gray-800 shadow-sm relative overflow-hidden transition-colors'>
						{isSuccess ? (
							<div className='flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500'>
								<div className='w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-6'>
									<span className='material-symbols-outlined text-3xl'>
										done_all
									</span>
								</div>
								<h3 className='text-2xl font-bold text-[#111418] dark:text-white mb-2'>
									Message Received!
								</h3>
								<p className='text-[#637588] dark:text-gray-400 mb-8'>
									Thanks for reaching out. I'll get back to
									you within 24 hours.
								</p>
								<button
									onClick={() => setIsSuccess(false)}
									className='text-primary font-bold hover:underline'>
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
									<div className='space-y-2'>
										<label
											htmlFor='name'
											className='text-sm font-bold text-[#111418] dark:text-gray-200'>
											Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleChange}
											placeholder='Pham Minh Tam'
											className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0f172a] border ${
												errors.name
													? 'border-red-500'
													: 'border-[#dbe0e6] dark:border-gray-700'
											} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600`}
										/>
										{errors.name && (
											<p className='text-xs font-medium text-red-500 mt-1'>
												{errors.name}
											</p>
										)}
									</div>
									<div className='space-y-2'>
										<label
											htmlFor='email'
											className='text-sm font-bold text-[#111418] dark:text-gray-200'>
											Email Address
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='phtam0907@gmail.com'
											className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0f172a] border ${
												errors.email
													? 'border-red-500'
													: 'border-[#dbe0e6] dark:border-gray-700'
											} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600`}
										/>
										{errors.email && (
											<p className='text-xs font-medium text-red-500 mt-1'>
												{errors.email}
											</p>
										)}
									</div>
								</div>

								<div className='space-y-2'>
									<label
										htmlFor='message'
										className='text-sm font-bold text-[#111418] dark:text-gray-200'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={5}
										value={formData.message}
										onChange={handleChange}
										placeholder='Tell me about your project...'
										className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0f172a] border ${
											errors.message
												? 'border-red-500'
												: 'border-[#dbe0e6] dark:border-gray-700'
										} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none`}></textarea>
									{errors.message && (
										<p className='text-xs font-medium text-red-500 mt-1'>
											{errors.message}
										</p>
									)}
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full h-14 bg-primary text-white font-black text-lg rounded-xl hover:bg-blue-600 disabled:bg-blue-400 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 group'>
									{isSubmitting ? (
										<>
											<svg
												className='animate-spin h-5 w-5 text-white'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'>
												<circle
													className='opacity-25'
													cx='12'
													cy='12'
													r='10'
													stroke='currentColor'
													strokeWidth='4'></circle>
												<path
													className='opacity-75'
													fill='currentColor'
													d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
											</svg>
											Processing...
										</>
									) : (
										<>
											<div className='flex items-center gap-2'>
												<span>Send Message</span>
												<span className='material-symbols-outlined transition-transform  '>
													send
												</span>
											</div>
										</>
									)}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</motion.section>
	);
};
