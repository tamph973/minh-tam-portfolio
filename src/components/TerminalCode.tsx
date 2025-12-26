export const TerminalCode: React.FC = () => {
	return (
		<div className='relative max-w-3xl mx-auto'>
			{/* Glow effect */}
			<div
				className='absolute inset-0 rounded-2xl blur-xl pointer-events-none'
				style={{
					background: 'linear-gradient(to right, #007bff, #6c4ffb)'
				}}
			/>

			{/* Terminal container */}
			<div className='relative bg-[#020617] rounded-2xl border border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden'>
				{/* Header */}
				<div className='flex items-center justify-between px-5 py-3 border-b border-slate-700'>
					<div className='flex gap-2'>
						<span className='w-3 h-3 rounded-full bg-red-500' />
						<span className='w-3 h-3 rounded-full bg-yellow-400' />
						<span className='w-3 h-3 rounded-full bg-green-500' />
					</div>
					<span className='text-xs font-mono text-slate-400'>
						server.js
					</span>
				</div>

				{/* Code */}
				<pre className='px-5 py-4 font-mono text-sm leading-6 text-slate-200 overflow-x-auto'>
					<span className='text-purple-400'>import</span> express{' '}
					<span className='text-purple-400'>from</span>{' '}
					<span className='text-emerald-400'>'express'</span>;{'\n'}
					<span className='text-purple-400'>import</span> {'{'}{' '}
					rateLimit {'}'}{' '}
					<span className='text-purple-400'>from</span>{' '}
					<span className='text-emerald-400'>
						'express-rate-limit'
					</span>
					;{'\n'}
					<span className='text-purple-400'>import</span> helmet{' '}
					<span className='text-purple-400'>from</span>{' '}
					<span className='text-emerald-400'>'helmet'</span>;{'\n\n'}
					<span className='text-slate-500'>
						// Initialize application
					</span>
					{'\n'}
					<span className='text-blue-400'>const</span> app ={' '}
					<span className='text-yellow-300'>express</span>();
					{'\n\n'}
					<span className='text-slate-500'>// Rate limiting</span>
					{'\n'}
					<span className='text-blue-400'>const</span> limiter ={' '}
					<span className='text-yellow-300'>rateLimit</span>({'{'}
					{'\n'}
					{'  '}windowMs: <span className='text-orange-400'>15</span>{' '}
					* <span className='text-orange-400'>60</span> *{' '}
					<span className='text-orange-400'>1000</span>,{'\n'}
					{'  '}max: <span className='text-orange-400'>100</span>,
					{'\n'}
					{'}'});
					{'\n\n'}
					<span className='text-slate-500'>// Middleware stack</span>
					{'\n'}
					app.<span className='text-yellow-300'>use</span>(limiter);
					{'\n'}
					app.<span className='text-yellow-300'>use</span>(helmet());
					{'\n'}
					app.<span className='text-yellow-300'>use</span>( express.
					<span className='text-yellow-300'>json</span>());
					{'\n\n'}
					<span className='text-slate-500'>// Start server</span>
					{'\n'}
					app.<span className='text-yellow-300'>listen</span>(
					<span className='text-orange-400'>3000</span>, () =&gt;{' '}
					{'{'}
					{'\n'}
					{'  '}console.<span className='text-yellow-300'>log</span>(
					<span className='text-emerald-400'>'Server ready 🚀'</span>
					);
					{'\n'}
					{'}'});
				</pre>
			</div>
		</div>
	);
};
