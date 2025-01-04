const Footer = () => {
	return (
		<div className='flex items-center justify-center'>
			<p className='text-center text-sm font-medium text-gray-600 md:text-lg'>
				<span className='flex text-center text-sm text-gray-600 md:text-base'>
					©{new Date().getFullYear()} Eyad Sharaf Almasri. All rights reserved
				</span>
			</p>
		</div>
	);
};

export default Footer;
