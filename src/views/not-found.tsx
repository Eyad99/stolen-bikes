import error from '@/assets/images/error.png';
const NotFound = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center rounded-[20px] bg-white dark:bg-white/10 md:py-12 lg:py-28 3xl:py-40'>
			<img src={error} className='mt-4 w-[400px]' alt='' />
			<h1 className='mt-3 text-center text-4xl font-bold lg:text-5xl'>Ah, We didn't find that page.</h1>
			<p className='mt-4 text-center text-sm font-normal xl:mt-8 xl:text-lg'>
				Maybe it’s best you start back at our home page...
				<a href='/' className='font-bold text-brand-500 hover:text-brand-500'>
					Return at home here
				</a>
			</p>
		</div>
	);
};

export default NotFound;
