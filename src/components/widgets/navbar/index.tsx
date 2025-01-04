import Dropdown from '@/components/reusable/dropdown';
import avatar from '@/assets/images/avatar.png';
import { ModeToggle } from '../../mode-toggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={`flex flex-row items-center justify-between rounded-xl bg-white/10 shadow-md p-2 backdrop-blur-xl`}>
			<div className='ml-[6px] w-full'>
				<p className='font-bold text-[23px] md:text-[33px] capitalize'>
					<Link to='#'>Stolen bikes</Link>
				</p>
			</div>

			<div className='relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-end gap-2 rounded-full px-2 py-2 md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2'>
				{/* Dark Mood And light Mood  */}
				<ModeToggle />

				{/* Dropdown */}
				<Dropdown
					button={<img className='h-10 w-10 rounded-full' src={avatar} alt='Elon Musk' />}
					children={() => (
						<div className='flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-xl shadow-shadow-500'>
							<div className='ml-4 mt-3'>
								<div className='flex items-center gap-2'>
									<p className='text-sm font-bold '>Eyad Sharaf Almasri</p>
								</div>
							</div>
						</div>
					)}
					classNames={'py-2 top-8 -left-[180px] w-max'}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
